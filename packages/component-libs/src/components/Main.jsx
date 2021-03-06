import {
  Flex, Heading, Text, VStack,
} from '@chakra-ui/react';
import * as utility from '@khuctrang-monorepo/utility';
import Details from './Details';

export default function Main() {
  const string = 'hello World Lorem ipsum dolor sit amet';

  return (
    <Flex h="100vh" py={20}>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <Details />
      </VStack>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.50">
        <Heading>Utility Test</Heading>
        <div>
          <Heading size="md">Original</Heading>
          <Text>{string}</Text>
          <br />
          <Heading size="md">Camel case</Heading>
          <Text>{utility.toCamelCase(string)}</Text>
          <br />
          <Heading size="md">Snake case</Heading>
          <Text>{utility.toSnakeCase(string)}</Text>
          <br />
          <Heading size="md">Pascal case</Heading>
          <Text>{utility.toPascalCase(string)}</Text>
        </div>
      </VStack>
    </Flex>
  );
}
