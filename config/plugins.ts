import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
    "strapi-csv-import-export": {
        enabled: true,
        config: {
            authorizedExports: [
                "api::country-ranking.country-ranking",
                "api::student.student",
                "api::timeline.timeline",
                "api::year.year",
                "api::country.country"
            ],
            authorizedImports: [
                "api::country-ranking.country-ranking",
                "api::student.student",
                "api::timeline.timeline",
                "api::year.year",
                "api::country.country"
            ],
        }
    }
});

export default config;
