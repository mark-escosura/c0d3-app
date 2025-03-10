import { gql } from '@apollo/client'

const UPDATE_LESSON = gql`
  mutation updateLesson(
    $id: Int!
    $docUrl: String
    $githubUrl: String
    $videoUrl: String
    $chatUrl: String
    $order: Int!
    $slug: String!
    $description: String!
    $title: String!
  ) {
    updateLesson(
      docUrl: $docUrl
      githubUrl: $githubUrl
      videoUrl: $videoUrl
      chatUrl: $chatUrl
      id: $id
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

export default UPDATE_LESSON
