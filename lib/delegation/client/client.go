package main

import (
	"context"
	"fmt"
	"log"

	"google.golang.org/grpc"

	pb "cyber_ui/lib/delegation/proto"
)

func main() {
	delegationRequest := &pb.DelegationRequest{}
	conn, err := grpc.Dial("localhost:8000", grpc.WithInsecure())
	if err != nil {
		log.Fatal("Failed to dial", err)
	}
	defer conn.Close()
	client := pb.NewDelegationServiceClient(conn)
	response, err := client.SubmitDelegationRequest(context.Background(), delegationRequest)
	if err != nil {
		log.Fatal("Error retrieving result from server: ", err)
	}
	fmt.Println("Received response:", response.ResponseMessage)
}
