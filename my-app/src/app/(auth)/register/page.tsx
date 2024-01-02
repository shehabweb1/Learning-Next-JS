import { Metadata, NextPage } from "next";

interface Props {}

export const metadata: Metadata = {
	title: "Next authentication",
};

const Page: NextPage<Props> = ({}) => {
	return <div>Register</div>;
};

export default Page;
