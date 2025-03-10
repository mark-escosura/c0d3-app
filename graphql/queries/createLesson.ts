import { gql } from '@apollo/client'

const CREATE_LESSON = gql`
  mutation createLesson(
    $docUrl: String
    $githubUrl: String
    $videoUrl: String
    $chatUrl: String
    $order: Int!
    $slug: String!
    $description: String!
    $title: String!
  ) {
    createLesson(
      docUrl: $docUrl
      githubUrl: $githubUrl
      videoUrl: $videoUrl
      chatUrl: $chatUrl
      order: $order
      slug: $slug
      description: $description
      title: $title
    ) {
      id
      docUrl
      githubUrl
      videoUrl
      chatUrl
      order
      slug
      description
      title
      challenges {
        id
        description
        lessonId
        title
        order
      }
    }
  }
`

export default CREATE_LESSON
