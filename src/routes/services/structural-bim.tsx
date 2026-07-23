import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("structural-bim");

export const Route = createFileRoute("/services/structural-bim")({
  head: () => ({
    meta: [
      { title: "Structural BIM Services - Infinity BIM" },
      {
        name: "description",
        content:
          "Structural BIM modeling for RCC, steel, rebar, shop drawings, fabrication models, and quantity take-off.",
      },
      { property: "og:title", content: "Structural BIM Services - Infinity BIM" },
      { property: "og:url", content: "/services/structural-bim" },
    ],
    links: [{ rel: "canonical", href: "/services/structural-bim" }],
  }),
  component: () => <ServicePage service={service!} />,
});
