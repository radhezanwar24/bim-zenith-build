import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("architectural-bim");

export const Route = createFileRoute("/services/architectural-bim")({
  head: () => ({
    meta: [
      { title: "Architectural BIM Services - Infinity BIM" },
      {
        name: "description",
        content:
          "Architectural BIM modeling, LOD 100-500 models, documentation, scan to BIM, QTO, and BIM standards compliance.",
      },
      { property: "og:title", content: "Architectural BIM Services - Infinity BIM" },
      { property: "og:url", content: "/services/architectural-bim" },
    ],
    links: [{ rel: "canonical", href: "/services/architectural-bim" }],
  }),
  component: () => <ServicePage service={service!} />,
});
