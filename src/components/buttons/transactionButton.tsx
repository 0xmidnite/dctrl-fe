import { Button } from "@mui/material";
import { FC } from "react";

interface ITransactionButtonProps {
  disabled: boolean;
}

export const TransactionButton: FC<ITransactionButtonProps> = ({
  disabled,
}) => {
  const isButtonDisabled = disabled;

  return <Button disabled={isButtonDisabled}></Button>;
};
