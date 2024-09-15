import { Button, Fade, HStack, Text, Image } from "@chakra-ui/react";
import { useWallet, useWalletModal } from "@vechain/dapp-kit-react";
import { FaWallet } from "react-icons/fa6";
import { useEffect } from "react";
import { useAccount } from "../hooks/useAccount";

export const ConnectWalletButton = () => {
  const { balance, setAccount, fetchB3TRBalance } = useAccount()
  const { account } = useWallet();
  const { open } = useWalletModal();

  useEffect(() => {
    if (!account) return
    setAccount(account)
    fetchB3TRBalance()
  }, [account])

  if (!account)
    return (
      <Fade in={true}>
        <Button
          onClick={open}
          colorScheme="primary"
          size="md"
          leftIcon={<FaWallet />}
          data-testid="connect-wallet"
        >
          Connect Wallet
        </Button>
      </Fade>
    );

  return (
    <Fade in={true}>
      <Button
        onClick={open}
        rounded={"full"}
        color="black"
        size="md"
        bg="#C0F17E"
        pl={2}
        pr={2}
      >
        <HStack spacing={1}>
          <Image src={"img/ico/token-icon_b3tr.webp"} height={8} display={"inline"} verticalAlign={"middle"} />
          <Text fontWeight={"400"} minWidth={10} textAlign="left">{balance}</Text>
        </HStack>
      </Button>
    </Fade>
  );
};
