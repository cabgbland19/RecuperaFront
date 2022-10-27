import { BACKEND_API_DATA_GESTION } from "~/config/api.config";

export default function ({ $axios }, inject) {
  const api = $axios.create();

  api.setBaseURL(BACKEND_API_DATA_GESTION);

  inject("api", api);
}
