import { getResearchData } from '@services/contentfulUtils'
import ResearchItem from '@components/ResearchItem'

const ResearchList = async () => {

  const researchData = await getResearchData()

  return (
    <>
      {researchData.map((research) => (
        <ResearchItem key={research.sys.id} research={research} />
      ))}
    </>
  )
}

export default ResearchList