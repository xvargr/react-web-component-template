import { createContext, useState, useEffect, useMemo } from "react";
import { UnitySocket } from "../classes/UnitySocket";
import { Whatsapp } from "../classes/Whatsapp";

interface IContextValues {
  connections: {
    [key: string]: UnitySocket;
  };
  connectionStatus: {
    [key: UnitySocket["name"]]: boolean;
  };
  allConnected: boolean;
}

export const ConnectionContext = createContext<IContextValues>({
  connections: {},
  connectionStatus: {},
  allConnected: false,
});

export function ConnectionProvider(props: React.PropsWithChildren) {
  // const [allConnected, setAllConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<
    IContextValues["connectionStatus"]
  >({
    whatsapp: false,
  });

  // compute if all connections are established
  const allConnected = useMemo(() => {
    return Array.from(Object.values(connectionStatus)).every(
      (status) => status
    );
  }, [connectionStatus]);

  // create connections here
  const connections = useMemo(() => {
    return {
      whatsapp: new Whatsapp({
        name: "whatsapp",
        url: socket_url,
        options: {
          autoConnect: false,
          extraHeaders: socket_custom_header,
          auth: socket_auth,
        },
        dispatches: {
          setConnection: setConnectionStatus,
        },
      }),
    };
  }, []);

  // initialize and connect all socket connections on mount, and disconnect them on unmount
  useEffect(() => {
    for (const key in connections) {
      const socket = connections[key as keyof typeof connections];
      socket.connect();
    }

    return () => {
      for (const key in connections) {
        const socket = connections[key as keyof typeof connections];
        socket.disconnect();
      }
    };
  }, [connections]);

  const contextValue = {
    connections: connections,
    connectionStatus: connectionStatus,
    allConnected,
  };

  return (
    <ConnectionContext.Provider value={contextValue}>
      {props.children}
    </ConnectionContext.Provider>
  );
}
