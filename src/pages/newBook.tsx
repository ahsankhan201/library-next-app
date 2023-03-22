import Head from "next/head";
import { Html } from "next/document";
import { gql } from "@apollo/client";
import client from "../apollo-client";

interface Props {
  collections: any;
}

export default function NewBook({ collections }: Props) {
  return (
    <>
      <Head>
        <title>Add New Book</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <h1 className="mt-2 text-center">Add New Book</h1>
        <form
          action="#"
          method="post"
          encType="multipart/form-data"
          className="max-w-lg mx-auto my-8"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 px-4 py-2 block w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block font-medium text-gray-700">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              required
              className="mt-1 px-4 py-2 block w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block font-medium text-gray-700">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="mt-1 px-4 py-2 block w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="cover-image"
              className="block font-medium text-gray-700"
            >
              Cover Image:
            </label>
            <input
              type="file"
              id="cover-image"
              name="cover-image"
              accept="image/*"
              className="mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="collection"
              className="block font-medium text-gray-700"
            >
              Collection:
            </label>
            <select
              id="collection"
              name="collection"
              required
              className="mt-1 px-4 py-2 block w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">--Select Collection--</option>
              {collections?.map((collection: any) => (
                <option key={collection.id} value={collection.id}>
                  {collection.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Add Book"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const collections = [
    {
      value: "read",
      label: "Read",
    },
    {
      value: "reading",
      label: "Reading",
    },
    {
      value: "read",
      label: "Read",
    },
  ];
  // Fetch collections from a server
  //   const collectionsResponse = await fetch("http://example.com/api/collections");
  //   const collections = await collectionsResponse.json();

  return {
    props: {
      collections,
    },
  };
}
