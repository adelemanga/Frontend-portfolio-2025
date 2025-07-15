import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "../components/Header";
import HomePage from "../components/Home";
import React from "react";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <HomePage />
      </div>
    </ApolloProvider>
  );
}
