import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("data-center-bim");

export const Route = createFileRoute("/services/data-center-bim")({
  head: () => ({
    meta: [
      { title: "Data Center BIM Services - Infinity BIM" },
      {
        name: "description",
        content:
          "Specialized BIM services for hyperscale, enterprise, AI, HPC, and mission-critical data center infrastructure.",
      },
      { property: "og:title", content: "Data Center BIM Services - Infinity BIM" },
      { property: "og:url", content: "/services/data-center-bim" },
    ],
    links: [{ rel: "canonical", href: "/services/data-center-bim" }],
  }),
  component: () => <ServicePage service={service!} />,
});
