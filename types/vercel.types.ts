export interface VercelCredentials {
  access_token: string;
  team_id: string | null;
  user_id: string;
  installation_id: string;
}

// https://vercel.com/docs/rest-api/interfaces#teamlimited
/** A limited form of data representing a Team, due to the authentication token missing privileges to read the full Team data. */
export interface TeamLimited {
  /** Property indicating that this Team data contains only limited information, due to the authentication token missing privileges to read the full Team data. Re-login with the Team's configured SAML Single Sign-On provider in order to upgrade the authentication token with the necessary privileges. */
  limited: boolean;
  /** When "Single Sign-On (SAML)" is configured, this object contains information that allows the client-side to identify whether or not this Team has SAML enforced. */
  saml?: {
    /** Information for the SAML Single Sign-On configuration. */
    connection?: {
      /** The Identity Provider "type", for example Okta. */
      type: string;
      /** Current status of the connection. */
      status: string;
      /** Current state of the connection. */
      state: string;
      /** Timestamp (in milliseconds) of when the configuration was connected. */
      connectedAt: number;
      /** Timestamp (in milliseconds) of when the last webhook event was received from WorkOS. */
      lastReceivedWebhookEvent?: number;
    };
    /** Information for the SAML Single Sign-On configuration. */
    directory?: {
      /** The Identity Provider "type", for example Okta. */
      type: string;
      /** Current status of the connection. */
      status: string;
      /** Current state of the connection. */
      state: string;
      /** Timestamp (in milliseconds) of when the configuration was connected. */
      connectedAt: number;
      /** Timestamp (in milliseconds) of when the last webhook event was received from WorkOS. */
      lastReceivedWebhookEvent?: number;
    };
    /** When `true`, interactions with the Team **must** be done with an authentication token that has been authenticated with the Team's SAML Single Sign-On provider. */
    enforced: boolean;
  };
  /** The Team's unique identifier. */
  id: string;
  /** The Team's slug, which is unique across the Vercel platform. */
  slug: string;
  /** Name associated with the Team account, or `null` if none has been provided. */
  name: string | null;
  /** The ID of the file used as avatar for this Team. */
  avatar: string | null;
  membership:
    | {
        confirmed: boolean;
        confirmedAt: number;
        accessRequestedAt?: number;
        role:
          | 'MEMBER'
          | 'OWNER'
          | 'VIEWER'
          | 'DEVELOPER'
          | 'BILLING'
          | 'CONTRIBUTOR';
        teamId?: string;
        uid: string;
        createdAt: number;
        created: number;
        joinedFrom?: {
          origin:
            | 'link'
            | 'saml'
            | 'mail'
            | 'import'
            | 'teams'
            | 'github'
            | 'gitlab'
            | 'bitbucket'
            | 'dsync'
            | 'feedback'
            | 'organization-teams';
          commitId?: string;
          repoId?: string;
          repoPath?: string;
          gitUserId?: string | number;
          gitUserLogin?: string;
          ssoUserId?: string;
          ssoConnectedAt?: number;
          idpUserId?: string;
          dsyncUserId?: string;
          dsyncConnectedAt?: number;
        };
      }
    | {
        confirmed: boolean;
        confirmedAt?: number;
        accessRequestedAt: number;
        role:
          | 'MEMBER'
          | 'OWNER'
          | 'VIEWER'
          | 'DEVELOPER'
          | 'BILLING'
          | 'CONTRIBUTOR';
        teamId?: string;
        uid: string;
        createdAt: number;
        created: number;
        joinedFrom?: {
          origin:
            | 'link'
            | 'saml'
            | 'mail'
            | 'import'
            | 'teams'
            | 'github'
            | 'gitlab'
            | 'bitbucket'
            | 'dsync'
            | 'feedback'
            | 'organization-teams';
          commitId?: string;
          repoId?: string;
          repoPath?: string;
          gitUserId?: string | number;
          gitUserLogin?: string;
          ssoUserId?: string;
          ssoConnectedAt?: number;
          idpUserId?: string;
          dsyncUserId?: string;
          dsyncConnectedAt?: number;
        };
      };
  /** Will remain undocumented. Remove in v3 API. */
  created: string;
  /** UNIX timestamp (in milliseconds) when the Team was created. */
  createdAt: number;
}

// https://vercel.com/docs/rest-api/interfaces#authuser
/** Data for the currently authenticated User. */
interface AuthUser {
  /** UNIX timestamp (in milliseconds) when the User account was created. */
  createdAt: number;
  /** When the User account has been "soft blocked", this property will contain the date when the restriction was enacted, and the identifier for why. */
  softBlock: {
    blockedAt: number;
    reason:
      | 'SUBSCRIPTION_CANCELED'
      | 'SUBSCRIPTION_EXPIRED'
      | 'UNPAID_INVOICE'
      | 'ENTERPRISE_TRIAL_ENDED'
      | 'FAIR_USE_LIMITS_EXCEEDED'
      | 'BLOCKED_FOR_PLATFORM_ABUSE';
    blockedDueToOverageType?:
      | 'analyticsUsage'
      | 'artifacts'
      | 'bandwidth'
      | 'cronJobInvocation'
      | 'dataCacheRead'
      | 'dataCacheRevalidation'
      | 'dataCacheWrite'
      | 'edgeConfigRead'
      | 'edgeConfigWrite'
      | 'edgeFunctionExecutionUnits'
      | 'edgeMiddlewareInvocations'
      | 'monitoringMetric'
      | 'postgresComputeTime'
      | 'postgresDatabase'
      | 'postgresDataStorage'
      | 'postgresDataTransfer'
      | 'postgresWrittenData'
      | 'serverlessFunctionExecution'
      | 'sourceImages'
      | 'storageRedisTotalBandwidthInBytes'
      | 'storageRedisTotalCommands'
      | 'storageRedisTotalDailyAvgStorageInBytes'
      | 'storageRedisTotalDatabases'
      | 'webAnalyticsEvent';
  } | null;
  /** An object containing billing infomation associated with the User account. */
  billing: {
    currency?: 'usd' | 'eur';
    cancelation?: number | null;
    period: {
      start: number;
      end: number;
    } | null;
    contract?: {
      start: number;
      end: number;
    } | null;
    plan: 'pro' | 'enterprise' | 'hobby';
    platform?: 'stripe' | 'stripeTestMode';
    orbCustomerId?: string;
    programType?: 'startup' | 'agency';
    trial?: {
      start: number;
      end: number;
    } | null;
    email?: string | null;
    tax?: {
      type: string;
      id: string;
    } | null;
    language?: string | null;
    address?: {
      line1: string;
      line2?: string;
      postalCode?: string;
      city?: string;
      country?: string;
      state?: string;
    } | null;
    name?: string | null;
    invoiceItems?: {
      /** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
      concurrentBuilds?: {
        tier?: number;
        price: number;
        quantity: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      /** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
      webAnalytics?: {
        tier?: number;
        price: number;
        quantity: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      /** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
      pro?: {
        tier?: number;
        price: number;
        quantity: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      /** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
      enterprise?: {
        tier?: number;
        price: number;
        quantity: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      /** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
      analytics?: {
        tier?: number;
        price: number;
        quantity: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      /** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
      monitoring?: {
        tier?: number;
        price: number;
        quantity: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      /** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
      passwordProtection?: {
        tier?: number;
        price: number;
        quantity: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      /** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
      previewDeploymentSuffix?: {
        tier?: number;
        price: number;
        quantity: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      /** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
      saml?: {
        tier?: number;
        price: number;
        quantity: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      /** Will be used to create an invoice item. The price must be in cents: 2000 for $20. */
      teamSeats?: {
        tier?: number;
        price: number;
        quantity: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      analyticsUsage?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      artifacts?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      bandwidth?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      cronJobInvocation?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      dataCacheRead?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      dataCacheRevalidation?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      dataCacheWrite?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      edgeConfigRead?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      edgeConfigWrite?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      edgeFunctionExecutionUnits?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      edgeMiddlewareInvocations?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      monitoringMetric?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      postgresComputeTime?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      postgresDatabase?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      postgresDataStorage?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      postgresDataTransfer?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      postgresWrittenData?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      serverlessFunctionExecution?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      sourceImages?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      storageRedisTotalBandwidthInBytes?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      storageRedisTotalCommands?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      storageRedisTotalDailyAvgStorageInBytes?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      storageRedisTotalDatabases?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      webAnalyticsEvent?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
    } | null;
    invoiceSettings?: {
      footer?: string;
    };
    subscriptions?:
      | {
          id: string;
          trial: {
            start: number;
            end: number;
          } | null;
          period: {
            start: number;
            end: number;
          };
          frequency: {
            interval: 'month' | 'day' | 'week' | 'year';
            intervalCount: number;
          };
          discount: {
            id: string;
            coupon: {
              id: string;
              name: string | null;
              amountOff: number | null;
              percentageOff: number | null;
              durationInMonths: number | null;
              duration: 'forever' | 'repeating' | 'once';
            };
          } | null;
          items: {
            id: string;
            priceId: string;
            productId: string;
            amount: number;
            quantity: number;
          }[];
        }[]
      | null;
    controls?: {
      analyticsSampleRateInPercent?: number | null;
      analyticsSpendLimitInDollars?: number | null;
    } | null;
    purchaseOrder?: string | null;
    status?: 'active' | 'trialing' | 'overdue' | 'expired' | 'canceled';
    pricingExperiment?: 'august-2022';
  } | null;
  /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
  resourceConfig: {
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    nodeType?: string;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    concurrentBuilds?: number;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    awsAccountType?: string;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    awsAccountIds?: string[];
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    cfZoneName?: string;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    edgeConfigs?: number;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    edgeConfigSize?: number;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    edgeFunctionMaxSizeBytes?: number;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    edgeFunctionExecutionTimeoutMs?: number;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    serverlessFunctionDefaultMaxExecutionTime?: number;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    kvDatabases?: number;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    postgresDatabases?: number;
    /** An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    blobStores?: number;
  };
  /** Prefix that will be used in the URL of "Preview" deployments created by the User account. */
  stagingPrefix: string;
  /** set of dashboard view preferences (cards or list) per scopeId */
  activeDashboardViews?: {
    scopeId: string;
    viewPreference: 'cards' | 'list';
  }[];
  importFlowGitNamespace?: (string | number) | null;
  importFlowGitNamespaceId?: (string | number) | null;
  importFlowGitProvider?: 'github' | 'gitlab' | 'bitbucket';
  preferredScopesAndGitNamespaces?: {
    scopeId: string;
    gitNamespaceId: (string | number) | null;
  }[];
  /** A record of when, under a certain scopeId, a toast was dismissed */
  dismissedToasts?: {
    name: string;
    dismissals: {
      scopeId: string;
      createdAt: number;
    }[];
  }[];
  /** A list of projects and spaces across teams that a user has marked as a favorite. */
  favoriteProjectsAndSpaces?: (
    | {
        projectId: string;
        scopeSlug: string;
        scopeId: string;
      }
    | {
        spaceId: string;
        scopeSlug: string;
        scopeId: string;
      }
  )[];
  /** Whether the user has a trial available for a paid plan subscription. */
  hasTrialAvailable: boolean;
  /** remote caching settings */
  remoteCaching?: {
    enabled?: boolean;
  };
  /** data cache settings */
  dataCache?: {
    excessBillingEnabled?: boolean;
  };
  /** Feature blocks for the user */
  featureBlocks?: {
    webAnalytics?: {
      blockedFrom?: number;
      blockedUntil?: number;
      isCurrentlyBlocked: boolean;
    };
  };
  /** The User's unique identifier. */
  id: string;
  /** Email address associated with the User account. */
  email: string;
  /** Name associated with the User account, or `null` if none has been provided. */
  name: string | null;
  /** Unique username associated with the User account. */
  username: string;
  /** SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image. */
  avatar: string | null;
}

export interface InstallingUser extends AuthUser {
  /** The User's unique identifier. */
  uid: string;
}

export interface V4ProjectsResponse {
  projects: {
    accountId: string;
    analytics?: {
      id: string;
      canceledAt: number | null;
      disabledAt: number;
      enabledAt: number;
      paidAt?: number;
      sampleRatePercent?: number | null;
      spendLimitInDollars?: number | null;
    };
    autoExposeSystemEnvs?: boolean;
    autoAssignCustomDomains?: boolean;
    autoAssignCustomDomainsUpdatedBy?: string;
    buildCommand?: string | null;
    commandForIgnoringBuildStep?: string | null;
    connectConfigurationId?: string | null;
    connectBuildsEnabled?: boolean;
    createdAt?: number;
    dataCache?: {
      userDisabled: boolean;
      storageSizeBytes?: number | null;
      unlimited?: boolean;
    };
    crons?: {
      /** The time the feature was enabled for this project. Note: It enables automatically with the first Deployment that outputs cronjobs. */
      enabledAt: number;
      /** The time the feature was disabled for this project. */
      disabledAt: number | null;
      updatedAt: number;
      /** The ID of the Deployment from which the definitions originated. */
      deploymentId: string | null;
      definitions: {
        /** The hostname that should be used. */
        host: string;
        /** The path that should be called for the cronjob. */
        path: string;
        /** The cron expression. */
        schedule: string;
      }[];
    };
    devCommand?: string | null;
    directoryListing: boolean;
    installCommand?: string | null;
    env?: {
      target?:
        | (
            | 'production'
            | 'preview'
            | 'development'
            | 'preview'
            | 'development'
          )[]
        | (
            | 'production'
            | 'preview'
            | 'development'
            | 'preview'
            | 'development'
          );
      type: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive';
      id?: string;
      key: string;
      value: string;
      configurationId?: string | null;
      createdAt?: number;
      updatedAt?: number;
      createdBy?: string | null;
      updatedBy?: string | null;
      gitBranch?: string;
      edgeConfigId?: string | null;
      edgeConfigTokenId?: string | null;
      contentHint?:
        | (
            | {
                type: 'redis-url';
                storeId: string;
              }
            | {
                type: 'redis-rest-api-url';
                storeId: string;
              }
            | {
                type: 'redis-rest-api-token';
                storeId: string;
              }
            | {
                type: 'redis-rest-api-read-only-token';
                storeId: string;
              }
            | {
                type: 'blob-read-write-token';
                storeId: string;
              }
            | {
                type: 'postgres-url';
                storeId: string;
              }
            | {
                type: 'postgres-url-non-pooling';
                storeId: string;
              }
            | {
                type: 'postgres-prisma-url';
                storeId: string;
              }
            | {
                type: 'postgres-user';
                storeId: string;
              }
            | {
                type: 'postgres-host';
                storeId: string;
              }
            | {
                type: 'postgres-password';
                storeId: string;
              }
            | {
                type: 'postgres-database';
                storeId: string;
              }
          )
        | null;
      /** Whether `value` is decrypted. */
      decrypted?: boolean;
    }[];
    framework?:
      | (
          | 'blitzjs'
          | 'nextjs'
          | 'gatsby'
          | 'remix'
          | 'astro'
          | 'hexo'
          | 'eleventy'
          | 'docusaurus-2'
          | 'docusaurus'
          | 'preact'
          | 'solidstart'
          | 'dojo'
          | 'ember'
          | 'vue'
          | 'scully'
          | 'ionic-angular'
          | 'angular'
          | 'polymer'
          | 'svelte'
          | 'sveltekit'
          | 'sveltekit-1'
          | 'ionic-react'
          | 'create-react-app'
          | 'gridsome'
          | 'umijs'
          | 'sapper'
          | 'saber'
          | 'stencil'
          | 'nuxtjs'
          | 'redwoodjs'
          | 'hugo'
          | 'jekyll'
          | 'brunch'
          | 'middleman'
          | 'zola'
          | 'hydrogen'
          | 'vite'
          | 'vitepress'
          | 'vuepress'
          | 'parcel'
          | 'sanity'
          | 'storybook'
        )
      | null;
    gitForkProtection?: boolean;
    gitLFS?: boolean;
    id: string;
    latestDeployments?: {
      alias?: string[];
      aliasAssigned?: (number | boolean) | null;
      aliasError?: {
        code: string;
        message: string;
      } | null;
      aliasFinal?: string | null;
      automaticAliases?: string[];
      builds?: {
        use: string;
        src?: string;
        dest?: string;
      }[];
      connectBuildsEnabled?: boolean;
      connectConfigurationId?: string;
      createdAt: number;
      createdIn: string;
      creator: {
        email: string;
        githubLogin?: string;
        gitlabLogin?: string;
        uid: string;
        username: string;
      } | null;
      deploymentHostname: string;
      name: string;
      forced?: boolean;
      id: string;
      meta?: { [key: string]: string };
      monorepoManager?: string | null;
      plan: 'pro' | 'enterprise' | 'hobby' | 'oss';
      private: boolean;
      readyState:
        | 'BUILDING'
        | 'ERROR'
        | 'INITIALIZING'
        | 'QUEUED'
        | 'READY'
        | 'CANCELED';
      readySubstate?: 'STAGED' | 'PROMOTED';
      requestedAt?: number;
      target?: string | null;
      teamId?: string | null;
      type: 'LAMBDAS';
      url: string;
      userId: string;
      withCache?: boolean;
      checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled';
      checksState?: 'registered' | 'running' | 'completed';
      readyAt?: number;
      buildingAt?: number;
      /** Whether or not preview comments are enabled for the deployment */
      previewCommentsEnabled?: boolean;
    }[];
    link?:
      | {
          org?: string;
          repo?: string;
          repoId?: number;
          type?: 'github';
          createdAt?: number;
          deployHooks: {
            createdAt?: number;
            id: string;
            name: string;
            ref: string;
            url: string;
          }[];
          gitCredentialId?: string;
          updatedAt?: number;
          sourceless?: boolean;
          productionBranch?: string;
        }
      | {
          projectId?: string;
          projectName?: string;
          projectNameWithNamespace?: string;
          projectNamespace?: string;
          projectUrl?: string;
          type?: 'gitlab';
          createdAt?: number;
          deployHooks: {
            createdAt?: number;
            id: string;
            name: string;
            ref: string;
            url: string;
          }[];
          gitCredentialId?: string;
          updatedAt?: number;
          sourceless?: boolean;
          productionBranch?: string;
        }
      | {
          name?: string;
          slug?: string;
          owner?: string;
          type?: 'bitbucket';
          uuid?: string;
          workspaceUuid?: string;
          createdAt?: number;
          deployHooks: {
            createdAt?: number;
            id: string;
            name: string;
            ref: string;
            url: string;
          }[];
          gitCredentialId?: string;
          updatedAt?: number;
          sourceless?: boolean;
          productionBranch?: string;
        };
    name: string;
    nodeVersion: '18.x' | '16.x' | '14.x' | '12.x' | '10.x';
    outputDirectory?: string | null;
    passwordProtection?: {
      deploymentType: 'preview' | 'all';
    } | null;
    productionDeploymentsFastLane?: boolean;
    publicSource?: boolean | null;
    rootDirectory?: string | null;
    serverlessFunctionRegion?: string | null;
    skipGitConnectDuringLink?: boolean;
    sourceFilesOutsideRootDirectory?: boolean;
    ssoProtection?: {
      deploymentType: 'preview' | 'all';
    } | null;
    targets?: {
      [key: string]: {
        alias?: string[];
        aliasAssigned?: (number | boolean) | null;
        aliasError?: {
          code: string;
          message: string;
        } | null;
        aliasFinal?: string | null;
        automaticAliases?: string[];
        builds?: {
          use: string;
          src?: string;
          dest?: string;
        }[];
        connectBuildsEnabled?: boolean;
        connectConfigurationId?: string;
        createdAt: number;
        createdIn: string;
        creator: {
          email: string;
          githubLogin?: string;
          gitlabLogin?: string;
          uid: string;
          username: string;
        } | null;
        deploymentHostname: string;
        name: string;
        forced?: boolean;
        id: string;
        meta?: { [key: string]: string };
        monorepoManager?: string | null;
        plan: 'pro' | 'enterprise' | 'hobby' | 'oss';
        private: boolean;
        readyState:
          | 'BUILDING'
          | 'ERROR'
          | 'INITIALIZING'
          | 'QUEUED'
          | 'READY'
          | 'CANCELED';
        readySubstate?: 'STAGED' | 'PROMOTED';
        requestedAt?: number;
        target?: string | null;
        teamId?: string | null;
        type: 'LAMBDAS';
        url: string;
        userId: string;
        withCache?: boolean;
        checksConclusion?: 'succeeded' | 'failed' | 'skipped' | 'canceled';
        checksState?: 'registered' | 'running' | 'completed';
        readyAt?: number;
        buildingAt?: number;
        /** Whether or not preview comments are enabled for the deployment */
        previewCommentsEnabled?: boolean;
      } | null;
    };
    transferCompletedAt?: number;
    transferStartedAt?: number;
    transferToAccountId?: string;
    transferredFromAccountId?: string;
    updatedAt?: number;
    live?: boolean;
    enablePreviewFeedback?: boolean | null;
    lastRollbackTarget?: { [key: string]: unknown } | null;
    lastAliasRequest?: {
      fromDeploymentId: string;
      toDeploymentId: string;
      jobStatus: 'succeeded' | 'failed' | 'skipped' | 'pending' | 'in-progress';
      requestedAt: number;
      type: 'promote' | 'rollback';
    } | null;
    hasFloatingAliases?: boolean;
    protectionBypass?: {
      [key: string]:
        | {
            createdAt: number;
            createdBy: string;
            scope: 'shareable-link' | 'automation-bypass';
          }
        | {
            createdAt: number;
            lastUpdatedAt: number;
            lastUpdatedBy: string;
            access: 'requested' | 'granted';
            scope: 'user';
          };
    };
    hasActiveBranches?: boolean;
    trustedIps?:
      | (
          | {
              deploymentType: 'preview' | 'all' | 'production';
              addresses: {
                value: string;
                note?: string;
              }[];
              protectionMode: 'additional' | 'exclusive';
            }
          | {
              deploymentType: 'preview' | 'all' | 'production';
            }
        )
      | null;
    gitComments?: {
      /** Whether the Vercel bot should comment on PRs */
      onPullRequest: boolean;
      /** Whether the Vercel bot should comment on commits */
      onCommit: boolean;
    };
  }[];
}

export interface AddedEnvVarResponse {
  created:
    | {
        target?:
          | (
              | 'production'
              | 'preview'
              | 'development'
              | 'preview'
              | 'development'
              | 'preview'
              | 'development'
            )[]
          | (
              | 'production'
              | 'preview'
              | 'development'
              | 'preview'
              | 'development'
              | 'preview'
              | 'development'
            );
        type?: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive';
        id?: string;
        key?: string;
        value?: string;
        configurationId?: string | null;
        createdAt?: number;
        updatedAt?: number;
        createdBy?: string | null;
        updatedBy?: string | null;
        gitBranch?: string;
        edgeConfigId?: string | null;
        edgeConfigTokenId?: string | null;
        contentHint?:
          | (
              | {
                  type: 'redis-url';
                  storeId: string;
                }
              | {
                  type: 'redis-rest-api-url';
                  storeId: string;
                }
              | {
                  type: 'redis-rest-api-token';
                  storeId: string;
                }
              | {
                  type: 'redis-rest-api-read-only-token';
                  storeId: string;
                }
              | {
                  type: 'blob-read-write-token';
                  storeId: string;
                }
              | {
                  type: 'postgres-url';
                  storeId: string;
                }
              | {
                  type: 'postgres-url-non-pooling';
                  storeId: string;
                }
              | {
                  type: 'postgres-prisma-url';
                  storeId: string;
                }
              | {
                  type: 'postgres-user';
                  storeId: string;
                }
              | {
                  type: 'postgres-host';
                  storeId: string;
                }
              | {
                  type: 'postgres-password';
                  storeId: string;
                }
              | {
                  type: 'postgres-database';
                  storeId: string;
                }
            )
          | null;
        /** Whether `value` is decrypted. */
        decrypted?: boolean;
        system?: boolean;
      }
    | {
        target?:
          | (
              | 'production'
              | 'preview'
              | 'development'
              | 'preview'
              | 'development'
              | 'preview'
              | 'development'
            )[]
          | (
              | 'production'
              | 'preview'
              | 'development'
              | 'preview'
              | 'development'
              | 'preview'
              | 'development'
            );
        type?: 'secret' | 'system' | 'encrypted' | 'plain' | 'sensitive';
        id?: string;
        key?: string;
        value?: string;
        configurationId?: string | null;
        createdAt?: number;
        updatedAt?: number;
        createdBy?: string | null;
        updatedBy?: string | null;
        gitBranch?: string;
        edgeConfigId?: string | null;
        edgeConfigTokenId?: string | null;
        contentHint?:
          | (
              | {
                  type: 'redis-url';
                  storeId: string;
                }
              | {
                  type: 'redis-rest-api-url';
                  storeId: string;
                }
              | {
                  type: 'redis-rest-api-token';
                  storeId: string;
                }
              | {
                  type: 'redis-rest-api-read-only-token';
                  storeId: string;
                }
              | {
                  type: 'blob-read-write-token';
                  storeId: string;
                }
              | {
                  type: 'postgres-url';
                  storeId: string;
                }
              | {
                  type: 'postgres-url-non-pooling';
                  storeId: string;
                }
              | {
                  type: 'postgres-prisma-url';
                  storeId: string;
                }
              | {
                  type: 'postgres-user';
                  storeId: string;
                }
              | {
                  type: 'postgres-host';
                  storeId: string;
                }
              | {
                  type: 'postgres-password';
                  storeId: string;
                }
              | {
                  type: 'postgres-database';
                  storeId: string;
                }
            )
          | null;
        /** Whether `value` is decrypted. */
        decrypted?: boolean;
        system?: boolean;
      }[];
  failed: {
    error: {
      code: string;
      message: string;
      key?: string;
      envVarId?: string;
      envVarKey?: string;
      action?: string;
      link?: string;
      value?:
        | string
        | (
            | 'production'
            | 'preview'
            | 'development'
            | 'preview'
            | 'development'
            | 'preview'
            | 'development'
          )[];
      gitBranch?: string;
      target?:
        | (
            | 'production'
            | 'preview'
            | 'development'
            | 'preview'
            | 'development'
            | 'preview'
            | 'development'
          )[]
        | (
            | 'production'
            | 'preview'
            | 'development'
            | 'preview'
            | 'development'
            | 'preview'
            | 'development'
          );
      project?: string;
    };
  }[];
}
