import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CapsuleModal } from "@usecapsule/react-sdk";
import {
  CapsuleEvmProvider,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@usecapsule/evm-wallet-connectors";
import "@usecapsule/react-sdk/styles.css";
import { useState } from "react";
import { mainnet } from "wagmi/chains";
import { capsuleClient } from "../utils/capsule";


const queryClient = new QueryClient();

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <CapsuleEvmProvider
        config={{
          appName: "Capsule NextJS Starter Template",
          chains: [mainnet],
          projectId: "85299096f2a1c5fdb142982398b71f9d",
          ssr: false,
          wallets: [metaMaskWallet, walletConnectWallet, rainbowWallet],
        }}>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Capsule Modal Starter Template with Next.js</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
            Open Capsule Modal
          </button>
          <CapsuleModal
            capsule={capsuleClient}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            logo={""}
            theme={{}}
            oAuthMethods={[]}
            disableEmailLogin={true}
            disablePhoneLogin={true}
            authLayout={["EXTERNAL:FULL"]}
            externalWallets={["METAMASK"]}
            twoFactorAuthEnabled={false}
            recoverySecretStepEnabled={true}
            onRampTestMode
          />
        </div>
      </CapsuleEvmProvider>
    </QueryClientProvider>
  );
}
