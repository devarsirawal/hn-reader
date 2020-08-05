import React from "react";
import { Box, Heading, Flex, Text, Button, Grid, Link } from "@chakra-ui/core";

const Header = () => {

    return (
        <Box position="sticky" top="0" left="0" margin="auto" width="100%" bg="coral" color="white">
        <Flex 
            as="nav"
            align="center"
            wrap="wrap"
            padding="1.0rem"
            justifyContent="center"
        >
            <Grid templateColumns="1fr 1140px 1fr" gap={2} width="100%">
                <Heading as="h1" fontFamily="sans-serif" size="md" letterSpacing={"-.1rem"}>
                    Hacker News
                </Heading>
                <Flex flexDirection="row" alignItems="center" justifyContent="flex-begin" pl="15px">
                    <Link href="/best" fontSize="20pt" fontFamily="sans-serif" size="md" color="#ffeed6" mr="20px" letterSpacing={"-.1rem"} _hover={{ color: "white" }}>
                        Best
                    </Link>
                    <Link href="/top" fontSize="20pt" fontFamily="sans-serif" size="md" color="#ffeed6" mr="20px" letterSpacing={"-.1rem"} _hover={{ color: "white" }}>
                        Top
                    </Link>
                    <Link href="/new" fontSize="20pt" fontFamily="sans-serif" size="md" color="#ffeed6" mr="20px" letterSpacing={"-.1rem"} _hover={{ color: "white" }}>
                        New
                    </Link>
                </Flex>
                <Flex w="100%" flexDirection="row" alignItems="center" justifyContent="flex-start">Built by me</Flex>
            </Grid>
        </Flex>
        </Box>
    );

};

export default Header;