
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const token = __ENV.JWT;
  const url = `${__ENV.BASE_URL}/api/appointments`;
  const res = http.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);
}
