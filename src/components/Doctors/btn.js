import { useToast } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'


function ToastExample() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'تم الحجز بنجاح.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }
  export default ToastExample;