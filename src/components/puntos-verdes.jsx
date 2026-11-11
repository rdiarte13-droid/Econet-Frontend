import { useEffect, useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const cityCenter = [-26.8241, -65.2226];
const overpassUrl = 'https://overpass-api.de/api/interpreter';
const overpassQuery = `
  [out:json][timeout:25];
  (
    node["amenity"="recycling"](around:10000,${cityCenter[0]},${cityCenter[1]});
    way["amenity"="recycling"](around:10000,${cityCenter[0]},${cityCenter[1]});
    relation["amenity"="recycling"](around:10000,${cityCenter[0]},${cityCenter[1]});
  );
  out center tags;
`;

function getCoordinates(element) {
  const lat = element.lat ?? element.center?.lat;
  const lon = element.lon ?? element.center?.lon;

  if (typeof lat !== 'number' || typeof lon !== 'number') {
    return null;
  }

  return [lat, lon];
}

function PuntosVerdes() {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPoints() {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(overpassUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: new URLSearchParams({ data: overpassQuery }),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('No se pudieron consultar los puntos de reciclaje.');
        }

        const data = await response.json();
        if (!Array.isArray(data.elements)) {
          throw new Error('La respuesta del mapa no tiene el formato esperado.');
        }

        const recyclingPoints = data.elements.flatMap((element) => {
          const position = getCoordinates(element);
          if (!position) return [];

          return [{
            id: `${element.type}-${element.id}`,
            position,
            name: element.tags?.name || element.tags?.operator || 'Punto de reciclaje',
            street: element.tags?.['addr:street'],
            number: element.tags?.['addr:housenumber'],
          }];
        });

        setPoints(recyclingPoints);
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || 'Ocurrió un error al cargar el mapa.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadPoints();
    return () => controller.abort();
  }, [retry]);

  return (
    <section id="puntos-verdes" className="green-points-section">
      <Container>
        <div className="section-heading text-center mb-4">
          <p className="eyebrow">Encontrá dónde reciclar</p>
          <h2>Puntos verdes en San Miguel de Tucumán</h2>
          <p className="text-muted">
            Sitios de reciclaje publicados en OpenStreetMap. El listado puede no incluir
            todos los puntos oficiales y depende de los datos disponibles.
          </p>
        </div>

        {error && (
          <Alert variant="warning" className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <span>{error}</span>
            <Button variant="outline-success" size="sm" onClick={() => setRetry((value) => value + 1)}>
              Reintentar
            </Button>
          </Alert>
        )}

        <div className="green-points-map-wrap">
          <MapContainer
            center={cityCenter}
            zoom={13}
            scrollWheelZoom={false}
            className="green-points-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {points.map((point) => (
              <CircleMarker
                key={point.id}
                center={point.position}
                radius={9}
                pathOptions={{ color: '#0f5d3a', fillColor: '#1d8f5f', fillOpacity: 0.9 }}
              >
                <Popup>
                  <strong>{point.name}</strong>
                  {point.street && (
                    <div>
                      {point.street}{point.number ? ` ${point.number}` : ''}
                    </div>
                  )}
                  <a
                    href={`https://www.openstreetmap.org/${point.id.replace('-', '/')}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver en OpenStreetMap
                  </a>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>

        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-3">
          <span className="small text-muted">
            {loading ? 'Cargando puntos de reciclaje…' : `${points.length} puntos encontrados`}
          </span>
          <a
            className="small text-success"
            href="https://www.openstreetmap.org/search?query=punto%20de%20reciclaje%20San%20Miguel%20de%20Tucum%C3%A1n"
            target="_blank"
            rel="noreferrer"
          >
            Buscar en OpenStreetMap
          </a>
        </div>

        {!loading && !error && points.length === 0 && (
          <Alert variant="info" className="mt-3 mb-0">
            No hay puntos de reciclaje registrados en OpenStreetMap en esta zona por el momento.
          </Alert>
        )}
      </Container>
    </section>
  );
}

export default PuntosVerdes;
