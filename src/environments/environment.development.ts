export const environment = {
  production: false,
  // Hits the Spring Boot backend directly (mvn spring-boot:run, default
  // port 8080). The backend's CorsConfig already allows localhost:4200 —
  // Angular's default `ng serve` port — by default, so no proxy.conf.json
  // is needed for local development.
  apiBaseUrl: 'http://localhost:8080/api',
};
