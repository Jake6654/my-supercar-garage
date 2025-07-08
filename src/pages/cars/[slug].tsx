import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { cars, Car } from "@/data/cars";

const ShowRoom = dynamic(() => import("@/components/three/ShowRoom"), {
  ssr: false,
});

interface CarPageProps {
  car: Car | null;
}

export default function CarPage({ car }: CarPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!car) {
    return <div>Car not found</div>;
  }

  return <ShowRoom car={car} onBack={() => router.push("/")} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = cars.map((car) => ({
    params: { slug: car.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<CarPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const car = cars.find((c) => c.slug === slug) || null;

  return {
    props: {
      car,
    },
    revalidate: 60, // Optional: In seconds, enables Incremental Static Regeneration
  };
};
