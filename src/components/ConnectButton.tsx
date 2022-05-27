import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Bounce } from 'react-activity';
import 'react-activity/dist/library.css';

interface Props {
  className: string;
}

const ConnectButton: React.FC<Props> = ({ className }) => {
  const { data: account } = useAccount();
  const { connect, connectors, error, isConnecting, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {connectors.map((connector) => (
        <button
          className={className}
          type="button"
          key={connector.id}
          onClick={() => (account ? disconnect() : connect(connector))}
        >
          {account ? (
            <p>Disconnect</p>
          ) : (
            <>
              <p>Connect</p>
              {isConnecting && connector.id === pendingConnector?.id && (
                <Bounce className="pl-2 pb-1" size={12} />
              )}
            </>
          )}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  );
};

export default ConnectButton;
