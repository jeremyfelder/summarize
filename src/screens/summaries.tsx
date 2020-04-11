import { SectionList, Text } from "react-native";

export default function Summaries (props: any) {
  const renderSectionSeparator = (title: string) => {
    return (
      <Text>{title}</Text>
    )
  }

  return (
    <SectionList
      sections={props.data}
      SectionSeparatorComponent={({ section: { title } }) => renderSectionSeparator(title)}
      stickySectionHeadersEnabled
    />
  )
}