type StructuredDataProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id?: string;
};

export function StructuredData({ data, id }: StructuredDataProps) {
  const payload = Array.isArray(data)
    ? {
        "@context": "https://schema.org",
        "@graph": data,
      }
    : {
        "@context": "https://schema.org",
        ...data,
      };

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
