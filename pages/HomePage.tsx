import { PageContainer, PageHeader, FeedbackCard, Flex } from '../components';
import PointsSummaryCard from '../components/home/PointsSummaryCard';
import { useCustomerProfile } from '../hooks';

export default function HomePage() {
  const profile = useCustomerProfile();

  return (
    <PageContainer>
      <PageHeader
        title="Indie Points"
        subtitle="Welcome to Indie Points! Here is your points summary."
      />
      <PointsSummaryCard
        label="Active points"
        value={profile?.data?.points?.totalActive ?? 0}
        variant="primary"
      />
      <Flex direction="row">
        <PointsSummaryCard
          label="Total earned"
          value={profile?.data?.points?.totalEarned ?? 0}
          variant="secondary"
        />
        <PointsSummaryCard
          label="Total redeemed"
          value={profile?.data?.points?.totalRedeemed ?? 0}
          variant="tertiary"
        />
      </Flex>
      <FeedbackCard />
    </PageContainer>
  );
}
