import { Route } from "@strapi/strapi/lib/types/factories"

export default {
  routes: [
    {
      method: "GET",
      path: "/service/top/:slug",
      handler: 'service.top'
    }
  ]
}
