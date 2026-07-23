import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/lib/services";

const service = getService("mep-bim");

export const Route = createFileRoute("/services/mep-bim")({
  head: () => ({
    meta: [
      { title: "MEP BIM Services - Infinity BIM" },
      {
        name: "description",
        content:
          "MEP BIM services for HVAC, plumbing, electrical, fire protection, BIM coordination, and clash detection.",
      },
      { property: "og:title", content: "MEP BIM Services - Infinity BIM" },
      { property: "og:url", content: "/services/mep-bim" },
    ],
    links: [{ rel: "canonical", href: "/services/mep-bim" }],
  }),
  component: () => <ServicePage service={service!} />,
});
