import { Flex } from "@chakra-ui/react";

interface SeparatorProps {
  children?: JSX.Element[] | JSX.Element;
}

export function Separator(props: SeparatorProps) {
  const { children, ...rest } = props;
  return (
    <Flex
      h="1px"
      w="100%"
      bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)"
      {...rest}
    >
      {children}
    </Flex>
  );
}
