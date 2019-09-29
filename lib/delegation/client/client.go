package main

import (
	"bufio"
	"context"
	"fmt"
	"log"
	"os"

	"google.golang.org/grpc"

	pb "cyber_ui/lib/delegation/proto"
)

func main() {
	conn, err := grpc.Dial("localhost:8000", grpc.WithInsecure())
	if err != nil {
		log.Fatal("Failed to connect to delegation server", err)
	}
	defer conn.Close()
	client := pb.NewDelegationServiceClient(conn)
	delegationRequest := &pb.DelegationRequest{}
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Print("Label: ")
	scanner.Scan()
	delegationRequest.Label = scanner.Text()
	response, err := client.SubmitDelegationRequest(context.Background(), delegationRequest)
	if err != nil {
		log.Fatal("Error retrieving result from server: ", err)
	}
	fmt.Println("Received response:", response.ResponseMessage)
}
