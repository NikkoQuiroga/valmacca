
import React from "react";
import { Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
    return (
        <div className="welcome-container">
        <Center>
          <Box boxSize="xxl">
            <Image
              src="https://www.conasi.eu/blog/wp-content/uploads/2020/09/ceramica-y-porcelana-para-cocinar-1111-1.jpg"
              alt="ceramista"
            />
          </Box>
        </Center>
      </div>    )
};

export default Welcome;