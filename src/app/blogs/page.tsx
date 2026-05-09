import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, blogs, person } from "@/resources";
import { Mailchimp } from "@/components/Mailchimp";

export async function generateMetadata() {
  return Meta.generate({
    title: blogs.title,
    description: blogs.description,
    baseURL: baseURL,
    path: blogs.path,
    image: `/api/og/generate?title=${encodeURIComponent(blogs.title)}`,
  });
}

export default function BlogsPage() {
  return (
    <Column gap="40" fillWidth horizontal="center" maxWidth="m" paddingTop="24" align="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={blogs.path}
        title={blogs.title}
        description={blogs.description}
        image={`/api/og/generate?title=${encodeURIComponent(blogs.title)}`}
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" align="center" gap="12" maxWidth="xs">
        <Heading as="h1" variant="display-strong-xs" wrap="balance" align="center">
          Coming soon
        </Heading>
        <Text wrap="balance" variant="body-default-l" align="center" onBackground="neutral-weak">
          {blogs.description}
        </Text>
      </Column>
      <Mailchimp subscriberSource="Blogs page (Portfolio)" />
    </Column>
  );
}
