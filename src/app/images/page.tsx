import Image from "next/image";
import Mailchimp from "../../../public/mailchimp-unsplash.jpg";

export default function Images() {
  return (
    <div>
      <h1>With relative path</h1>
      <Image
        alt="Mailchimp"
        src="/mailchimp-unsplash.jpg"
        width={1024}
        height={800}
      />

      <h1>With static import</h1>
      <Image src={Mailchimp} alt="Mailchimp" width={1024} height={800} />

      <h1>With remote URL</h1>
      <Image
        src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
        alt="Mailchimp"
        width={'1024'}
        height={'800'}
      />
    </div>
  );
}
