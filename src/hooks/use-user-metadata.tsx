import { useCallback } from "react";

interface KeyValueMap {
  [key: string]: any;
}

export default function useUserMedata() {
  const fetchUserMetadata = useCallback(async (): Promise<KeyValueMap> => {
    try {
      /**
       * '/api/auth/user/metadata' is a custom endpoint which will proxy
       * the request to the Auth0 Management API.
       *
       * Proxy sample at: https://components.lab.auth0.com/docs/components/user-metadata#nextjs-routers
       */
      const response = await fetch("/api/auth/user/metadata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // TODO: Better handling rate limits
      if (response.status === 429) {
        return { status: 429 };
      }

      const userMetadata: KeyValueMap = await response.json();

      return {
        metadata: userMetadata,
        status: response.status,
      };
    } catch (error) {
      console.error(error);
      return { status: 500 };
    }
  }, []);

  const updateUserMetadata = useCallback(
    async (
      values: KeyValueMap
    ): Promise<{
      metadata?: KeyValueMap;
      status: number;
    }> => {
      try {
        /**
         * '/api/auth/user/metadata' is a custom endpoint which will proxy
         * the request to the Auth0 Management API.
         *
         * Proxy sample at: https://components.lab.auth0.com/docs/components/user-metadata#nextjs-routers
         */
        const response = await fetch("/api/auth/user/metadata", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        // TODO: Better handling rate limits
        if (response.status === 429) {
          return { status: 429 };
        }

        const metadata: KeyValueMap = await response.json();

        return { metadata, status: response.status };
      } catch (e) {
        console.error(e);
        return { status: 500 };
      }
    },
    []
  );

  return { updateUserMetadata, fetchUserMetadata };
}