import { Route } from "@strapi/strapi/lib/types/factories"

export default {
  routes: [
    {
      method: "GET",
      path: "/post/top/:slug",
      handler: 'post.top'
    }
  ]
}
