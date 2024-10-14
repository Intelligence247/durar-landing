import { TopicCardProps, TopicsCard } from "@/components/TopicCard";

interface TopicsCardProps {
  topicsCardsInfo: TopicCardProps[];
}

export function TopicsCards({ topicsCardsInfo }: TopicsCardProps) {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between lg:items-stretch  gap-4 xl:gap-8">
      {topicsCardsInfo.map((topicsCardInfo) => (
        <TopicsCard
          key={topicsCardInfo.id}
          id={topicsCardInfo.id}
          image={topicsCardInfo.image}
          heading={topicsCardInfo.heading}
          paragraph={topicsCardInfo.paragraph}
          level={topicsCardInfo.level}
        />
      ))}
    </div>
  );
}
