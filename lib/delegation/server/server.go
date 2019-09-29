package main

import (
	"fmt"
	"net"

	"golang.org/x/net/context"
	"google.golang.org/grpc"

	pb "cyber_ui/lib/delegation/proto"
)

type delegationServer struct{}

func (s *delegationServer) SubmitDelegationRequest(ctx context.Context, req *pb.DelegationRequest) (*pb.SubmitDelegationRequestResponse, error) {
	response := &pb.SubmitDelegationRequestResponse{}
	response.ResponseMessage = "I don't know how to delegate that yet"
	return response, nil
}

func main() {
	fmt.Println("Running server...")
	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	listener, err := net.Listen("tcp", "localhost:8000")
	if err != nil {
		fmt.Println("Failed to listen")
	}
	delegationServer := &delegationServer{}
	pb.RegisterDelegationServiceServer(grpcServer, delegationServer)
	grpcServer.Serve(listener)
}
