import { createContext, useState, useEffect, useRef } from "react";
import { UnitySocket } from "../classes/UnitySocket";

interface IContextValues {
  socket: UnitySocket | null;
  isConnected: boolean;
}

export const WhatsappContext = createContext<IContextValues>({
  socket: null,
  isConnected: false,
});

export function WhatsappProvider(props: React.PropsWithChildren) {
  const [connected, setConnected] = useState(false);
  const whatsappSocket = useRef<UnitySocket | null>(null);

  // initialize socket connection for w
  useEffect(() => {
    whatsappSocket.current = new UnitySocket({
      url: socket_url,
      options: {
        autoConnect: false,
        extraHeaders: socket_custom_header,
        auth: socket_auth,
      },
    }).connect();
    setConnected(true);

    return () => {
      whatsappSocket.current?.disconnect();
      setConnected(false);
    };
  }, []);

  const contextValue = {
    socket: whatsappSocket.current,
    isConnected: connected,
  };

  return (
    <WhatsappContext.Provider value={contextValue}>
      {props.children}
    </WhatsappContext.Provider>
  );
}
