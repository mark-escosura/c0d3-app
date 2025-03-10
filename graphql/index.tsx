import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../@types/helpers'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as ApolloReactHoc from '@apollo/client/react/hoc'
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy
} from '@apollo/client/cache'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} & { [P in K]-?: NonNullable<T[P]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Alert = {
  __typename?: 'Alert'
  id: Scalars['Int']
  text?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  urlCaption?: Maybe<Scalars['String']>
}

export type AuthResponse = {
  __typename?: 'AuthResponse'
  success?: Maybe<Scalars['Boolean']>
  username?: Maybe<Scalars['String']>
  error?: Maybe<Scalars['String']>
  cliToken?: Maybe<Scalars['String']>
}

export type Challenge = {
  __typename?: 'Challenge'
  id: Scalars['Int']
  description: Scalars['String']
  lessonId: Scalars['Int']
  title: Scalars['String']
  order: Scalars['Int']
}

export type Comment = {
  __typename?: 'Comment'
  id: Scalars['Int']
  fileName?: Maybe<Scalars['String']>
  line?: Maybe<Scalars['Int']>
  content: Scalars['String']
  authorId: Scalars['Int']
  submissionId: Scalars['Int']
  createdAt: Scalars['String']
  author?: Maybe<User>
  submission?: Maybe<Submission>
}

export type Lesson = {
  __typename?: 'Lesson'
  id: Scalars['Int']
  description: Scalars['String']
  docUrl?: Maybe<Scalars['String']>
  githubUrl?: Maybe<Scalars['String']>
  videoUrl?: Maybe<Scalars['String']>
  order: Scalars['Int']
  slug: Scalars['String']
  title: Scalars['String']
  challenges: Array<Challenge>
  users?: Maybe<Array<Maybe<User>>>
  currentUser?: Maybe<User>
  chatUrl?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  setStar: SuccessResponse
  login?: Maybe<AuthResponse>
  logout?: Maybe<AuthResponse>
  reqPwReset: SuccessResponse
  changePw?: Maybe<AuthResponse>
  changeAdminRights?: Maybe<SuccessResponse>
  signup?: Maybe<AuthResponse>
  addAlert?: Maybe<Array<Maybe<Alert>>>
  removeAlert?: Maybe<SuccessResponse>
  createSubmission?: Maybe<Submission>
  acceptSubmission?: Maybe<Submission>
  rejectSubmission?: Maybe<Submission>
  addComment?: Maybe<Comment>
  createLesson: Array<Lesson>
  updateLesson: Array<Lesson>
  createChallenge?: Maybe<Array<Maybe<Lesson>>>
  updateChallenge?: Maybe<Array<Maybe<Lesson>>>
}

export type MutationSetStarArgs = {
  mentorId: Scalars['Int']
  lessonId: Scalars['Int']
  comment?: Maybe<Scalars['String']>
}

export type MutationLoginArgs = {
  username: Scalars['String']
  password: Scalars['String']
}

export type MutationReqPwResetArgs = {
  userOrEmail: Scalars['String']
}

export type MutationChangePwArgs = {
  token: Scalars['String']
  password: Scalars['String']
}

export type MutationChangeAdminRightsArgs = {
  id: Scalars['Int']
  status: Scalars['Boolean']
}

export type MutationSignupArgs = {
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  username: Scalars['String']
  password?: Maybe<Scalars['String']>
}

export type MutationAddAlertArgs = {
  text: Scalars['String']
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  urlCaption?: Maybe<Scalars['String']>
}

export type MutationRemoveAlertArgs = {
  id: Scalars['Int']
}

export type MutationCreateSubmissionArgs = {
  lessonId: Scalars['Int']
  challengeId: Scalars['Int']
  cliToken: Scalars['String']
  diff: Scalars['String']
}

export type MutationAcceptSubmissionArgs = {
  id: Scalars['Int']
  comment: Scalars['String']
  lessonId: Scalars['Int']
}

export type MutationRejectSubmissionArgs = {
  id: Scalars['Int']
  comment: Scalars['String']
  lessonId: Scalars['Int']
}

export type MutationAddCommentArgs = {
  line?: Maybe<Scalars['Int']>
  fileName?: Maybe<Scalars['String']>
  submissionId: Scalars['Int']
  content: Scalars['String']
}

export type MutationCreateLessonArgs = {
  description: Scalars['String']
  docUrl?: Maybe<Scalars['String']>
  githubUrl?: Maybe<Scalars['String']>
  videoUrl?: Maybe<Scalars['String']>
  title: Scalars['String']
  chatUrl?: Maybe<Scalars['String']>
  order: Scalars['Int']
  slug: Scalars['String']
}

export type MutationUpdateLessonArgs = {
  id: Scalars['Int']
  description: Scalars['String']
  docUrl?: Maybe<Scalars['String']>
  githubUrl?: Maybe<Scalars['String']>
  videoUrl?: Maybe<Scalars['String']>
  title: Scalars['String']
  chatUrl?: Maybe<Scalars['String']>
  order: Scalars['Int']
  slug: Scalars['String']
}

export type MutationCreateChallengeArgs = {
  lessonId: Scalars['Int']
  order: Scalars['Int']
  description: Scalars['String']
  title: Scalars['String']
}

export type MutationUpdateChallengeArgs = {
  lessonId: Scalars['Int']
  order: Scalars['Int']
  description: Scalars['String']
  title: Scalars['String']
  id: Scalars['Int']
}

export type Query = {
  __typename?: 'Query'
  lessons: Array<Lesson>
  session: Session
  allUsers?: Maybe<Array<Maybe<User>>>
  getLessonMentors?: Maybe<Array<Maybe<User>>>
  userInfo?: Maybe<Session>
  isTokenValid: Scalars['Boolean']
  submissions?: Maybe<Array<Submission>>
  alerts: Array<Alert>
  getPreviousSubmissions?: Maybe<Array<Submission>>
}

export type QueryGetLessonMentorsArgs = {
  lessonId: Scalars['Int']
}

export type QueryUserInfoArgs = {
  username: Scalars['String']
}

export type QueryIsTokenValidArgs = {
  cliToken: Scalars['String']
}

export type QuerySubmissionsArgs = {
  lessonId: Scalars['Int']
}

export type QueryGetPreviousSubmissionsArgs = {
  challengeId: Scalars['Int']
  userId: Scalars['Int']
}

export type Session = {
  __typename?: 'Session'
  user?: Maybe<User>
  submissions?: Maybe<Array<Submission>>
  lessonStatus: Array<UserLesson>
}

export type Star = {
  __typename?: 'Star'
  id: Scalars['Int']
  lessonId: Scalars['Int']
  comment?: Maybe<Scalars['String']>
  student: User
  lesson: Lesson
}

export type Submission = {
  __typename?: 'Submission'
  id: Scalars['Int']
  status: SubmissionStatus
  mrUrl?: Maybe<Scalars['String']>
  diff?: Maybe<Scalars['String']>
  viewCount?: Maybe<Scalars['Int']>
  comment?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['Int']>
  lessonId: Scalars['Int']
  challengeId: Scalars['Int']
  challenge: Challenge
  reviewer?: Maybe<User>
  user: User
  reviewerId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['String']>
  updatedAt: Scalars['String']
  comments?: Maybe<Array<Comment>>
}

export enum SubmissionStatus {
  Overwritten = 'overwritten',
  NeedMoreWork = 'needMoreWork',
  Open = 'open',
  Passed = 'passed'
}

export type SuccessResponse = {
  __typename?: 'SuccessResponse'
  success?: Maybe<Scalars['Boolean']>
}

export type TokenResponse = {
  __typename?: 'TokenResponse'
  success?: Maybe<Scalars['Boolean']>
  token?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  id: Scalars['Int']
  username: Scalars['String']
  userLesson?: Maybe<UserLesson>
  email: Scalars['String']
  name: Scalars['String']
  isAdmin: Scalars['Boolean']
  isConnectedToDiscord: Scalars['Boolean']
  cliToken?: Maybe<Scalars['String']>
  discordUserId: Scalars['String']
  discordUsername: Scalars['String']
  discordAvatarUrl: Scalars['String']
}

export type UserLesson = {
  __typename?: 'UserLesson'
  id: Scalars['Int']
  userId?: Maybe<Scalars['String']>
  lessonId: Scalars['Int']
  passedAt?: Maybe<Scalars['String']>
  starsReceived?: Maybe<Array<Maybe<Star>>>
  starGiven?: Maybe<Scalars['String']>
}

export type AcceptSubmissionMutationVariables = Exact<{
  submissionId: Scalars['Int']
  comment: Scalars['String']
  lessonId: Scalars['Int']
}>

export type AcceptSubmissionMutation = {
  __typename?: 'Mutation'
  acceptSubmission?: Maybe<{
    __typename?: 'Submission'
    id: number
    comment?: Maybe<string>
    status: SubmissionStatus
  }>
}

export type AddAlertMutationVariables = Exact<{
  text: Scalars['String']
  type: Scalars['String']
  url?: Maybe<Scalars['String']>
  urlCaption?: Maybe<Scalars['String']>
}>

export type AddAlertMutation = {
  __typename?: 'Mutation'
  addAlert?: Maybe<
    Array<
      Maybe<{
        __typename?: 'Alert'
        id: number
        text?: Maybe<string>
        type?: Maybe<string>
        url?: Maybe<string>
        urlCaption?: Maybe<string>
      }>
    >
  >
}

export type AddCommentMutationVariables = Exact<{
  line?: Maybe<Scalars['Int']>
  submissionId: Scalars['Int']
  content: Scalars['String']
  fileName?: Maybe<Scalars['String']>
}>

export type AddCommentMutation = {
  __typename?: 'Mutation'
  addComment?: Maybe<{ __typename?: 'Comment'; id: number }>
}

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = {
  __typename?: 'Query'
  allUsers?: Maybe<
    Array<
      Maybe<{
        __typename?: 'User'
        id: number
        username: string
        name: string
        isAdmin: boolean
        email: string
        cliToken?: Maybe<string>
      }>
    >
  >
}

export type ChangeAdminRightsMutationVariables = Exact<{
  id: Scalars['Int']
  status: Scalars['Boolean']
}>

export type ChangeAdminRightsMutation = {
  __typename?: 'Mutation'
  changeAdminRights?: Maybe<{
    __typename?: 'SuccessResponse'
    success?: Maybe<boolean>
  }>
}

export type CreateChallengeMutationVariables = Exact<{
  lessonId: Scalars['Int']
  order: Scalars['Int']
  description: Scalars['String']
  title: Scalars['String']
}>

export type CreateChallengeMutation = {
  __typename?: 'Mutation'
  createChallenge?: Maybe<
    Array<
      Maybe<{
        __typename?: 'Lesson'
        id: number
        docUrl?: Maybe<string>
        githubUrl?: Maybe<string>
        videoUrl?: Maybe<string>
        chatUrl?: Maybe<string>
        order: number
        description: string
        title: string
        challenges: Array<{
          __typename?: 'Challenge'
          id: number
          description: string
          lessonId: number
          title: string
          order: number
        }>
      }>
    >
  >
}

export type CreateLessonMutationVariables = Exact<{
  docUrl?: Maybe<Scalars['String']>
  githubUrl?: Maybe<Scalars['String']>
  videoUrl?: Maybe<Scalars['String']>
  chatUrl?: Maybe<Scalars['String']>
  order: Scalars['Int']
  slug: Scalars['String']
  description: Scalars['String']
  title: Scalars['String']
}>

export type CreateLessonMutation = {
  __typename?: 'Mutation'
  createLesson: Array<{
    __typename?: 'Lesson'
    id: number
    docUrl?: Maybe<string>
    githubUrl?: Maybe<string>
    videoUrl?: Maybe<string>
    chatUrl?: Maybe<string>
    order: number
    slug: string
    description: string
    title: string
    challenges: Array<{
      __typename?: 'Challenge'
      id: number
      description: string
      lessonId: number
      title: string
      order: number
    }>
  }>
}

export type CreateSubmissionMutationVariables = Exact<{
  lessonId: Scalars['Int']
  challengeId: Scalars['Int']
  cliToken: Scalars['String']
  diff: Scalars['String']
}>

export type CreateSubmissionMutation = {
  __typename?: 'Mutation'
  createSubmission?: Maybe<{
    __typename?: 'Submission'
    id: number
    diff?: Maybe<string>
  }>
}

export type GetAppQueryVariables = Exact<{ [key: string]: never }>

export type GetAppQuery = {
  __typename?: 'Query'
  lessons: Array<{
    __typename?: 'Lesson'
    id: number
    title: string
    description: string
    docUrl?: Maybe<string>
    githubUrl?: Maybe<string>
    videoUrl?: Maybe<string>
    order: number
    slug: string
    chatUrl?: Maybe<string>
    challenges: Array<{
      __typename?: 'Challenge'
      id: number
      title: string
      description: string
      order: number
    }>
  }>
  session: {
    __typename?: 'Session'
    user?: Maybe<{
      __typename?: 'User'
      id: number
      username: string
      name: string
      isAdmin: boolean
      isConnectedToDiscord: boolean
    }>
    submissions?: Maybe<
      Array<{
        __typename?: 'Submission'
        id: number
        status: SubmissionStatus
        mrUrl?: Maybe<string>
        diff?: Maybe<string>
        viewCount?: Maybe<number>
        comment?: Maybe<string>
        order?: Maybe<number>
        challengeId: number
        lessonId: number
        createdAt?: Maybe<string>
        updatedAt: string
        reviewer?: Maybe<{ __typename?: 'User'; id: number; username: string }>
        user: { __typename?: 'User'; id: number }
        comments?: Maybe<
          Array<{
            __typename?: 'Comment'
            content: string
            submissionId: number
            createdAt: string
            authorId: number
            line?: Maybe<number>
            fileName?: Maybe<string>
            author?: Maybe<{
              __typename?: 'User'
              username: string
              name: string
            }>
          }>
        >
      }>
    >
    lessonStatus: Array<{
      __typename?: 'UserLesson'
      lessonId: number
      passedAt?: Maybe<string>
      starGiven?: Maybe<string>
    }>
  }
  alerts: Array<{
    __typename?: 'Alert'
    id: number
    text?: Maybe<string>
    type?: Maybe<string>
    url?: Maybe<string>
    urlCaption?: Maybe<string>
  }>
}

export type LessonMentorsQueryVariables = Exact<{
  lessonId: Scalars['Int']
}>

export type LessonMentorsQuery = {
  __typename?: 'Query'
  getLessonMentors?: Maybe<
    Array<
      Maybe<{ __typename?: 'User'; username: string; name: string; id: number }>
    >
  >
}

export type GetLessonsQueryVariables = Exact<{ [key: string]: never }>

export type GetLessonsQuery = {
  __typename?: 'Query'
  lessons: Array<{
    __typename?: 'Lesson'
    id: number
    title: string
    slug: string
    description: string
    docUrl?: Maybe<string>
    githubUrl?: Maybe<string>
    videoUrl?: Maybe<string>
    order: number
    chatUrl?: Maybe<string>
    challenges: Array<{
      __typename?: 'Challenge'
      id: number
      description: string
      title: string
      order: number
    }>
  }>
}

export type GetPreviousSubmissionsQueryVariables = Exact<{
  challengeId: Scalars['Int']
  userId: Scalars['Int']
}>

export type GetPreviousSubmissionsQuery = {
  __typename?: 'Query'
  getPreviousSubmissions?: Maybe<
    Array<{
      __typename?: 'Submission'
      id: number
      status: SubmissionStatus
      diff?: Maybe<string>
      comment?: Maybe<string>
      challengeId: number
      lessonId: number
      createdAt?: Maybe<string>
      updatedAt: string
      challenge: { __typename?: 'Challenge'; title: string }
      user: { __typename?: 'User'; id: number; username: string }
      reviewer?: Maybe<{
        __typename?: 'User'
        id: number
        username: string
        name: string
      }>
      comments?: Maybe<
        Array<{
          __typename?: 'Comment'
          content: string
          submissionId: number
          createdAt: string
          authorId: number
          line?: Maybe<number>
          fileName?: Maybe<string>
          author?: Maybe<{
            __typename?: 'User'
            username: string
            name: string
          }>
        }>
      >
    }>
  >
}

export type GetSessionQueryVariables = Exact<{ [key: string]: never }>

export type GetSessionQuery = {
  __typename?: 'Query'
  session: {
    __typename?: 'Session'
    user?: Maybe<{
      __typename?: 'User'
      id: number
      username: string
      name: string
      isAdmin: boolean
      isConnectedToDiscord: boolean
    }>
    submissions?: Maybe<
      Array<{
        __typename?: 'Submission'
        id: number
        status: SubmissionStatus
        mrUrl?: Maybe<string>
        diff?: Maybe<string>
        viewCount?: Maybe<number>
        comment?: Maybe<string>
        order?: Maybe<number>
        challengeId: number
        lessonId: number
        createdAt?: Maybe<string>
        updatedAt: string
        reviewer?: Maybe<{ __typename?: 'User'; id: number; username: string }>
      }>
    >
    lessonStatus: Array<{
      __typename?: 'UserLesson'
      lessonId: number
      passedAt?: Maybe<string>
      starGiven?: Maybe<string>
    }>
  }
}

export type SubmissionsQueryVariables = Exact<{
  lessonId: Scalars['Int']
}>

export type SubmissionsQuery = {
  __typename?: 'Query'
  submissions?: Maybe<
    Array<{
      __typename?: 'Submission'
      id: number
      status: SubmissionStatus
      diff?: Maybe<string>
      comment?: Maybe<string>
      challengeId: number
      lessonId: number
      createdAt?: Maybe<string>
      updatedAt: string
      challenge: { __typename?: 'Challenge'; title: string }
      user: { __typename?: 'User'; id: number; username: string }
      reviewer?: Maybe<{
        __typename?: 'User'
        id: number
        username: string
        name: string
      }>
      comments?: Maybe<
        Array<{
          __typename?: 'Comment'
          content: string
          submissionId: number
          createdAt: string
          authorId: number
          line?: Maybe<number>
          fileName?: Maybe<string>
          author?: Maybe<{
            __typename?: 'User'
            username: string
            name: string
          }>
        }>
      >
    }>
  >
}

export type LoginMutationVariables = Exact<{
  username: Scalars['String']
  password: Scalars['String']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login?: Maybe<{
    __typename?: 'AuthResponse'
    success?: Maybe<boolean>
    username?: Maybe<string>
    cliToken?: Maybe<string>
    error?: Maybe<string>
  }>
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = {
  __typename?: 'Mutation'
  logout?: Maybe<{
    __typename?: 'AuthResponse'
    success?: Maybe<boolean>
    username?: Maybe<string>
    error?: Maybe<string>
  }>
}

export type RejectSubmissionMutationVariables = Exact<{
  submissionId: Scalars['Int']
  comment: Scalars['String']
  lessonId: Scalars['Int']
}>

export type RejectSubmissionMutation = {
  __typename?: 'Mutation'
  rejectSubmission?: Maybe<{
    __typename?: 'Submission'
    id: number
    comment?: Maybe<string>
    status: SubmissionStatus
  }>
}

export type RemoveAlertMutationVariables = Exact<{
  id: Scalars['Int']
}>

export type RemoveAlertMutation = {
  __typename?: 'Mutation'
  removeAlert?: Maybe<{
    __typename?: 'SuccessResponse'
    success?: Maybe<boolean>
  }>
}

export type ReqPwResetMutationVariables = Exact<{
  userOrEmail: Scalars['String']
}>

export type ReqPwResetMutation = {
  __typename?: 'Mutation'
  reqPwReset: { __typename?: 'SuccessResponse'; success?: Maybe<boolean> }
}

export type SetStarMutationVariables = Exact<{
  mentorId: Scalars['Int']
  lessonId: Scalars['Int']
  comment?: Maybe<Scalars['String']>
}>

export type SetStarMutation = {
  __typename?: 'Mutation'
  setStar: { __typename?: 'SuccessResponse'; success?: Maybe<boolean> }
}

export type SignupMutationVariables = Exact<{
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  username: Scalars['String']
}>

export type SignupMutation = {
  __typename?: 'Mutation'
  signup?: Maybe<{
    __typename?: 'AuthResponse'
    success?: Maybe<boolean>
    username?: Maybe<string>
    error?: Maybe<string>
    cliToken?: Maybe<string>
  }>
}

export type UpdateChallengeMutationVariables = Exact<{
  lessonId: Scalars['Int']
  order: Scalars['Int']
  description: Scalars['String']
  title: Scalars['String']
  id: Scalars['Int']
}>

export type UpdateChallengeMutation = {
  __typename?: 'Mutation'
  updateChallenge?: Maybe<
    Array<
      Maybe<{
        __typename?: 'Lesson'
        id: number
        docUrl?: Maybe<string>
        githubUrl?: Maybe<string>
        videoUrl?: Maybe<string>
        chatUrl?: Maybe<string>
        order: number
        description: string
        title: string
        challenges: Array<{
          __typename?: 'Challenge'
          id: number
          description: string
          lessonId: number
          title: string
          order: number
        }>
      }>
    >
  >
}

export type UpdateLessonMutationVariables = Exact<{
  id: Scalars['Int']
  docUrl?: Maybe<Scalars['String']>
  githubUrl?: Maybe<Scalars['String']>
  videoUrl?: Maybe<Scalars['String']>
  chatUrl?: Maybe<Scalars['String']>
  order: Scalars['Int']
  slug: Scalars['String']
  description: Scalars['String']
  title: Scalars['String']
}>

export type UpdateLessonMutation = {
  __typename?: 'Mutation'
  updateLesson: Array<{
    __typename?: 'Lesson'
    id: number
    docUrl?: Maybe<string>
    githubUrl?: Maybe<string>
    videoUrl?: Maybe<string>
    chatUrl?: Maybe<string>
    order: number
    slug: string
    description: string
    title: string
    challenges: Array<{
      __typename?: 'Challenge'
      id: number
      description: string
      lessonId: number
      title: string
      order: number
    }>
  }>
}

export type ChangePwMutationVariables = Exact<{
  token: Scalars['String']
  password: Scalars['String']
}>

export type ChangePwMutation = {
  __typename?: 'Mutation'
  changePw?: Maybe<{ __typename?: 'AuthResponse'; success?: Maybe<boolean> }>
}

export type UserInfoQueryVariables = Exact<{
  username: Scalars['String']
}>

export type UserInfoQuery = {
  __typename?: 'Query'
  lessons: Array<{
    __typename?: 'Lesson'
    id: number
    title: string
    description: string
    docUrl?: Maybe<string>
    githubUrl?: Maybe<string>
    videoUrl?: Maybe<string>
    order: number
    chatUrl?: Maybe<string>
    challenges: Array<{
      __typename?: 'Challenge'
      id: number
      title: string
      description: string
      order: number
    }>
  }>
  userInfo?: Maybe<{
    __typename?: 'Session'
    user?: Maybe<{
      __typename?: 'User'
      id: number
      username: string
      name: string
      discordUserId: string
      discordUsername: string
      discordAvatarUrl: string
    }>
    submissions?: Maybe<
      Array<{
        __typename?: 'Submission'
        id: number
        status: SubmissionStatus
        mrUrl?: Maybe<string>
        diff?: Maybe<string>
        viewCount?: Maybe<number>
        comment?: Maybe<string>
        order?: Maybe<number>
        challengeId: number
        lessonId: number
        createdAt?: Maybe<string>
        updatedAt: string
        reviewer?: Maybe<{ __typename?: 'User'; id: number; username: string }>
      }>
    >
    lessonStatus: Array<{
      __typename?: 'UserLesson'
      lessonId: number
      passedAt?: Maybe<string>
      starsReceived?: Maybe<
        Array<
          Maybe<{
            __typename?: 'Star'
            lessonId: number
            comment?: Maybe<string>
            student: { __typename?: 'User'; username: string; name: string }
            lesson: { __typename?: 'Lesson'; title: string; order: number }
          }>
        >
      >
    }>
  }>
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Alert: ResolverTypeWrapper<Alert>
  Int: ResolverTypeWrapper<Scalars['Int']>
  String: ResolverTypeWrapper<Scalars['String']>
  AuthResponse: ResolverTypeWrapper<AuthResponse>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Challenge: ResolverTypeWrapper<Challenge>
  Comment: ResolverTypeWrapper<Comment>
  Lesson: ResolverTypeWrapper<Lesson>
  Mutation: ResolverTypeWrapper<{}>
  Query: ResolverTypeWrapper<{}>
  Session: ResolverTypeWrapper<Session>
  Star: ResolverTypeWrapper<Star>
  Submission: ResolverTypeWrapper<Submission>
  SubmissionStatus: SubmissionStatus
  SuccessResponse: ResolverTypeWrapper<SuccessResponse>
  TokenResponse: ResolverTypeWrapper<TokenResponse>
  User: ResolverTypeWrapper<User>
  UserLesson: ResolverTypeWrapper<UserLesson>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Alert: Alert
  Int: Scalars['Int']
  String: Scalars['String']
  AuthResponse: AuthResponse
  Boolean: Scalars['Boolean']
  Challenge: Challenge
  Comment: Comment
  Lesson: Lesson
  Mutation: {}
  Query: {}
  Session: Session
  Star: Star
  Submission: Submission
  SuccessResponse: SuccessResponse
  TokenResponse: TokenResponse
  User: User
  UserLesson: UserLesson
}>

export type AlertResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Alert'] = ResolversParentTypes['Alert']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  urlCaption?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AuthResponseResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['AuthResponse'] = ResolversParentTypes['AuthResponse']
> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  cliToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ChallengeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Challenge'] = ResolversParentTypes['Challenge']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  lessonId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CommentResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  line?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  authorId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  submissionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  submission?: Resolver<
    Maybe<ResolversTypes['Submission']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LessonResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Lesson'] = ResolversParentTypes['Lesson']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  docUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  githubUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  videoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  challenges?: Resolver<
    Array<ResolversTypes['Challenge']>,
    ParentType,
    ContextType
  >
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  chatUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  setStar?: Resolver<
    ResolversTypes['SuccessResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationSetStarArgs, 'mentorId' | 'lessonId'>
  >
  login?: Resolver<
    Maybe<ResolversTypes['AuthResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'username' | 'password'>
  >
  logout?: Resolver<
    Maybe<ResolversTypes['AuthResponse']>,
    ParentType,
    ContextType
  >
  reqPwReset?: Resolver<
    ResolversTypes['SuccessResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationReqPwResetArgs, 'userOrEmail'>
  >
  changePw?: Resolver<
    Maybe<ResolversTypes['AuthResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationChangePwArgs, 'token' | 'password'>
  >
  changeAdminRights?: Resolver<
    Maybe<ResolversTypes['SuccessResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationChangeAdminRightsArgs, 'id' | 'status'>
  >
  signup?: Resolver<
    Maybe<ResolversTypes['AuthResponse']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSignupArgs,
      'firstName' | 'lastName' | 'email' | 'username'
    >
  >
  addAlert?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Alert']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationAddAlertArgs, 'text' | 'type'>
  >
  removeAlert?: Resolver<
    Maybe<ResolversTypes['SuccessResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveAlertArgs, 'id'>
  >
  createSubmission?: Resolver<
    Maybe<ResolversTypes['Submission']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateSubmissionArgs,
      'lessonId' | 'challengeId' | 'cliToken' | 'diff'
    >
  >
  acceptSubmission?: Resolver<
    Maybe<ResolversTypes['Submission']>,
    ParentType,
    ContextType,
    RequireFields<MutationAcceptSubmissionArgs, 'id' | 'comment' | 'lessonId'>
  >
  rejectSubmission?: Resolver<
    Maybe<ResolversTypes['Submission']>,
    ParentType,
    ContextType,
    RequireFields<MutationRejectSubmissionArgs, 'id' | 'comment' | 'lessonId'>
  >
  addComment?: Resolver<
    Maybe<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddCommentArgs, 'submissionId' | 'content'>
  >
  createLesson?: Resolver<
    Array<ResolversTypes['Lesson']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateLessonArgs,
      'description' | 'title' | 'order' | 'slug'
    >
  >
  updateLesson?: Resolver<
    Array<ResolversTypes['Lesson']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateLessonArgs,
      'id' | 'description' | 'title' | 'order' | 'slug'
    >
  >
  createChallenge?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Lesson']>>>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateChallengeArgs,
      'lessonId' | 'order' | 'description' | 'title'
    >
  >
  updateChallenge?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Lesson']>>>,
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateChallengeArgs,
      'lessonId' | 'order' | 'description' | 'title' | 'id'
    >
  >
}>

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  lessons?: Resolver<Array<ResolversTypes['Lesson']>, ParentType, ContextType>
  session?: Resolver<ResolversTypes['Session'], ParentType, ContextType>
  allUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >
  getLessonMentors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetLessonMentorsArgs, 'lessonId'>
  >
  userInfo?: Resolver<
    Maybe<ResolversTypes['Session']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserInfoArgs, 'username'>
  >
  isTokenValid?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<QueryIsTokenValidArgs, 'cliToken'>
  >
  submissions?: Resolver<
    Maybe<Array<ResolversTypes['Submission']>>,
    ParentType,
    ContextType,
    RequireFields<QuerySubmissionsArgs, 'lessonId'>
  >
  alerts?: Resolver<Array<ResolversTypes['Alert']>, ParentType, ContextType>
  getPreviousSubmissions?: Resolver<
    Maybe<Array<ResolversTypes['Submission']>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetPreviousSubmissionsArgs, 'challengeId' | 'userId'>
  >
}>

export type SessionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']
> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  submissions?: Resolver<
    Maybe<Array<ResolversTypes['Submission']>>,
    ParentType,
    ContextType
  >
  lessonStatus?: Resolver<
    Array<ResolversTypes['UserLesson']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type StarResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Star'] = ResolversParentTypes['Star']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  lessonId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  student?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  lesson?: Resolver<ResolversTypes['Lesson'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type SubmissionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Submission'] = ResolversParentTypes['Submission']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['SubmissionStatus'], ParentType, ContextType>
  mrUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  diff?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  viewCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  lessonId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  challengeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  challenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType>
  reviewer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  reviewerId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  comments?: Resolver<
    Maybe<Array<ResolversTypes['Comment']>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type SuccessResponseResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['SuccessResponse'] = ResolversParentTypes['SuccessResponse']
> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TokenResponseResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['TokenResponse'] = ResolversParentTypes['TokenResponse']
> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  userLesson?: Resolver<
    Maybe<ResolversTypes['UserLesson']>,
    ParentType,
    ContextType
  >
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isConnectedToDiscord?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >
  cliToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  discordUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  discordUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  discordAvatarUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UserLessonResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UserLesson'] = ResolversParentTypes['UserLesson']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lessonId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  passedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  starsReceived?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Star']>>>,
    ParentType,
    ContextType
  >
  starGiven?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = Context> = ResolversObject<{
  Alert?: AlertResolvers<ContextType>
  AuthResponse?: AuthResponseResolvers<ContextType>
  Challenge?: ChallengeResolvers<ContextType>
  Comment?: CommentResolvers<ContextType>
  Lesson?: LessonResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Session?: SessionResolvers<ContextType>
  Star?: StarResolvers<ContextType>
  Submission?: SubmissionResolvers<ContextType>
  SuccessResponse?: SuccessResponseResolvers<ContextType>
  TokenResponse?: TokenResponseResolvers<ContextType>
  User?: UserResolvers<ContextType>
  UserLesson?: UserLessonResolvers<ContextType>
}>

export const AcceptSubmissionDocument = gql`
  mutation acceptSubmission(
    $submissionId: Int!
    $comment: String!
    $lessonId: Int!
  ) {
    acceptSubmission(
      id: $submissionId
      comment: $comment
      lessonId: $lessonId
    ) {
      id
      comment
      status
    }
  }
`
export type AcceptSubmissionMutationFn = Apollo.MutationFunction<
  AcceptSubmissionMutation,
  AcceptSubmissionMutationVariables
>
export type AcceptSubmissionProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    AcceptSubmissionMutation,
    AcceptSubmissionMutationVariables
  >
} & TChildProps
export function withAcceptSubmission<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AcceptSubmissionMutation,
    AcceptSubmissionMutationVariables,
    AcceptSubmissionProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    AcceptSubmissionMutation,
    AcceptSubmissionMutationVariables,
    AcceptSubmissionProps<TChildProps, TDataName>
  >(AcceptSubmissionDocument, {
    alias: 'acceptSubmission',
    ...operationOptions
  })
}

/**
 * __useAcceptSubmissionMutation__
 *
 * To run a mutation, you first call `useAcceptSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptSubmissionMutation, { data, loading, error }] = useAcceptSubmissionMutation({
 *   variables: {
 *      submissionId: // value for 'submissionId'
 *      comment: // value for 'comment'
 *      lessonId: // value for 'lessonId'
 *   },
 * });
 */
export function useAcceptSubmissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AcceptSubmissionMutation,
    AcceptSubmissionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AcceptSubmissionMutation,
    AcceptSubmissionMutationVariables
  >(AcceptSubmissionDocument, options)
}
export type AcceptSubmissionMutationHookResult = ReturnType<
  typeof useAcceptSubmissionMutation
>
export type AcceptSubmissionMutationResult =
  Apollo.MutationResult<AcceptSubmissionMutation>
export type AcceptSubmissionMutationOptions = Apollo.BaseMutationOptions<
  AcceptSubmissionMutation,
  AcceptSubmissionMutationVariables
>
export const AddAlertDocument = gql`
  mutation addAlert(
    $text: String!
    $type: String!
    $url: String
    $urlCaption: String
  ) {
    addAlert(text: $text, type: $type, url: $url, urlCaption: $urlCaption) {
      id
      text
      type
      url
      urlCaption
    }
  }
`
export type AddAlertMutationFn = Apollo.MutationFunction<
  AddAlertMutation,
  AddAlertMutationVariables
>
export type AddAlertProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    AddAlertMutation,
    AddAlertMutationVariables
  >
} & TChildProps
export function withAddAlert<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AddAlertMutation,
    AddAlertMutationVariables,
    AddAlertProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    AddAlertMutation,
    AddAlertMutationVariables,
    AddAlertProps<TChildProps, TDataName>
  >(AddAlertDocument, {
    alias: 'addAlert',
    ...operationOptions
  })
}

/**
 * __useAddAlertMutation__
 *
 * To run a mutation, you first call `useAddAlertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAlertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAlertMutation, { data, loading, error }] = useAddAlertMutation({
 *   variables: {
 *      text: // value for 'text'
 *      type: // value for 'type'
 *      url: // value for 'url'
 *      urlCaption: // value for 'urlCaption'
 *   },
 * });
 */
export function useAddAlertMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddAlertMutation,
    AddAlertMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddAlertMutation, AddAlertMutationVariables>(
    AddAlertDocument,
    options
  )
}
export type AddAlertMutationHookResult = ReturnType<typeof useAddAlertMutation>
export type AddAlertMutationResult = Apollo.MutationResult<AddAlertMutation>
export type AddAlertMutationOptions = Apollo.BaseMutationOptions<
  AddAlertMutation,
  AddAlertMutationVariables
>
export const AddCommentDocument = gql`
  mutation addComment(
    $line: Int
    $submissionId: Int!
    $content: String!
    $fileName: String
  ) {
    addComment(
      line: $line
      submissionId: $submissionId
      content: $content
      fileName: $fileName
    ) {
      id
    }
  }
`
export type AddCommentMutationFn = Apollo.MutationFunction<
  AddCommentMutation,
  AddCommentMutationVariables
>
export type AddCommentProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    AddCommentMutation,
    AddCommentMutationVariables
  >
} & TChildProps
export function withAddComment<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AddCommentMutation,
    AddCommentMutationVariables,
    AddCommentProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    AddCommentMutation,
    AddCommentMutationVariables,
    AddCommentProps<TChildProps, TDataName>
  >(AddCommentDocument, {
    alias: 'addComment',
    ...operationOptions
  })
}

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      line: // value for 'line'
 *      submissionId: // value for 'submissionId'
 *      content: // value for 'content'
 *      fileName: // value for 'fileName'
 *   },
 * });
 */
export function useAddCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddCommentMutation,
    AddCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(
    AddCommentDocument,
    options
  )
}
export type AddCommentMutationHookResult = ReturnType<
  typeof useAddCommentMutation
>
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<
  AddCommentMutation,
  AddCommentMutationVariables
>
export const UsersDocument = gql`
  query users {
    allUsers {
      id
      username
      name
      isAdmin
      email
      cliToken
    }
  }
`
export type UsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<UsersQuery, UsersQueryVariables>
} & TChildProps
export function withUsers<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UsersQuery,
    UsersQueryVariables,
    UsersProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    UsersQuery,
    UsersQueryVariables,
    UsersProps<TChildProps, TDataName>
  >(UsersDocument, {
    alias: 'users',
    ...operationOptions
  })
}

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  )
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  )
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>
export const ChangeAdminRightsDocument = gql`
  mutation changeAdminRights($id: Int!, $status: Boolean!) {
    changeAdminRights(id: $id, status: $status) {
      success
    }
  }
`
export type ChangeAdminRightsMutationFn = Apollo.MutationFunction<
  ChangeAdminRightsMutation,
  ChangeAdminRightsMutationVariables
>
export type ChangeAdminRightsProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    ChangeAdminRightsMutation,
    ChangeAdminRightsMutationVariables
  >
} & TChildProps
export function withChangeAdminRights<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ChangeAdminRightsMutation,
    ChangeAdminRightsMutationVariables,
    ChangeAdminRightsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    ChangeAdminRightsMutation,
    ChangeAdminRightsMutationVariables,
    ChangeAdminRightsProps<TChildProps, TDataName>
  >(ChangeAdminRightsDocument, {
    alias: 'changeAdminRights',
    ...operationOptions
  })
}

/**
 * __useChangeAdminRightsMutation__
 *
 * To run a mutation, you first call `useChangeAdminRightsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeAdminRightsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeAdminRightsMutation, { data, loading, error }] = useChangeAdminRightsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useChangeAdminRightsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangeAdminRightsMutation,
    ChangeAdminRightsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    ChangeAdminRightsMutation,
    ChangeAdminRightsMutationVariables
  >(ChangeAdminRightsDocument, options)
}
export type ChangeAdminRightsMutationHookResult = ReturnType<
  typeof useChangeAdminRightsMutation
>
export type ChangeAdminRightsMutationResult =
  Apollo.MutationResult<ChangeAdminRightsMutation>
export type ChangeAdminRightsMutationOptions = Apollo.BaseMutationOptions<
  ChangeAdminRightsMutation,
  ChangeAdminRightsMutationVariables
>
export const CreateChallengeDocument = gql`
  mutation createChallenge(
    $lessonId: Int!
    $order: Int!
    $description: String!
    $title: String!
  ) {
    createChallenge(
      lessonId: $lessonId
      order: $order
      description: $description
      title: $title
    ) {
      id
      docUrl
      githubUrl
      videoUrl
      chatUrl
      order
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
export type CreateChallengeMutationFn = Apollo.MutationFunction<
  CreateChallengeMutation,
  CreateChallengeMutationVariables
>
export type CreateChallengeProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    CreateChallengeMutation,
    CreateChallengeMutationVariables
  >
} & TChildProps
export function withCreateChallenge<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateChallengeMutation,
    CreateChallengeMutationVariables,
    CreateChallengeProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateChallengeMutation,
    CreateChallengeMutationVariables,
    CreateChallengeProps<TChildProps, TDataName>
  >(CreateChallengeDocument, {
    alias: 'createChallenge',
    ...operationOptions
  })
}

/**
 * __useCreateChallengeMutation__
 *
 * To run a mutation, you first call `useCreateChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChallengeMutation, { data, loading, error }] = useCreateChallengeMutation({
 *   variables: {
 *      lessonId: // value for 'lessonId'
 *      order: // value for 'order'
 *      description: // value for 'description'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateChallengeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateChallengeMutation,
    CreateChallengeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateChallengeMutation,
    CreateChallengeMutationVariables
  >(CreateChallengeDocument, options)
}
export type CreateChallengeMutationHookResult = ReturnType<
  typeof useCreateChallengeMutation
>
export type CreateChallengeMutationResult =
  Apollo.MutationResult<CreateChallengeMutation>
export type CreateChallengeMutationOptions = Apollo.BaseMutationOptions<
  CreateChallengeMutation,
  CreateChallengeMutationVariables
>
export const CreateLessonDocument = gql`
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
export type CreateLessonMutationFn = Apollo.MutationFunction<
  CreateLessonMutation,
  CreateLessonMutationVariables
>
export type CreateLessonProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    CreateLessonMutation,
    CreateLessonMutationVariables
  >
} & TChildProps
export function withCreateLesson<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateLessonMutation,
    CreateLessonMutationVariables,
    CreateLessonProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateLessonMutation,
    CreateLessonMutationVariables,
    CreateLessonProps<TChildProps, TDataName>
  >(CreateLessonDocument, {
    alias: 'createLesson',
    ...operationOptions
  })
}

/**
 * __useCreateLessonMutation__
 *
 * To run a mutation, you first call `useCreateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLessonMutation, { data, loading, error }] = useCreateLessonMutation({
 *   variables: {
 *      docUrl: // value for 'docUrl'
 *      githubUrl: // value for 'githubUrl'
 *      videoUrl: // value for 'videoUrl'
 *      chatUrl: // value for 'chatUrl'
 *      order: // value for 'order'
 *      slug: // value for 'slug'
 *      description: // value for 'description'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateLessonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLessonMutation,
    CreateLessonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateLessonMutation,
    CreateLessonMutationVariables
  >(CreateLessonDocument, options)
}
export type CreateLessonMutationHookResult = ReturnType<
  typeof useCreateLessonMutation
>
export type CreateLessonMutationResult =
  Apollo.MutationResult<CreateLessonMutation>
export type CreateLessonMutationOptions = Apollo.BaseMutationOptions<
  CreateLessonMutation,
  CreateLessonMutationVariables
>
export const CreateSubmissionDocument = gql`
  mutation createSubmission(
    $lessonId: Int!
    $challengeId: Int!
    $cliToken: String!
    $diff: String!
  ) {
    createSubmission(
      lessonId: $lessonId
      challengeId: $challengeId
      cliToken: $cliToken
      diff: $diff
    ) {
      id
      diff
    }
  }
`
export type CreateSubmissionMutationFn = Apollo.MutationFunction<
  CreateSubmissionMutation,
  CreateSubmissionMutationVariables
>
export type CreateSubmissionProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    CreateSubmissionMutation,
    CreateSubmissionMutationVariables
  >
} & TChildProps
export function withCreateSubmission<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateSubmissionMutation,
    CreateSubmissionMutationVariables,
    CreateSubmissionProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateSubmissionMutation,
    CreateSubmissionMutationVariables,
    CreateSubmissionProps<TChildProps, TDataName>
  >(CreateSubmissionDocument, {
    alias: 'createSubmission',
    ...operationOptions
  })
}

/**
 * __useCreateSubmissionMutation__
 *
 * To run a mutation, you first call `useCreateSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubmissionMutation, { data, loading, error }] = useCreateSubmissionMutation({
 *   variables: {
 *      lessonId: // value for 'lessonId'
 *      challengeId: // value for 'challengeId'
 *      cliToken: // value for 'cliToken'
 *      diff: // value for 'diff'
 *   },
 * });
 */
export function useCreateSubmissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSubmissionMutation,
    CreateSubmissionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSubmissionMutation,
    CreateSubmissionMutationVariables
  >(CreateSubmissionDocument, options)
}
export type CreateSubmissionMutationHookResult = ReturnType<
  typeof useCreateSubmissionMutation
>
export type CreateSubmissionMutationResult =
  Apollo.MutationResult<CreateSubmissionMutation>
export type CreateSubmissionMutationOptions = Apollo.BaseMutationOptions<
  CreateSubmissionMutation,
  CreateSubmissionMutationVariables
>
export const GetAppDocument = gql`
  query getApp {
    lessons {
      id
      title
      description
      docUrl
      githubUrl
      videoUrl
      order
      slug
      challenges {
        id
        title
        description
        order
      }
      chatUrl
    }
    session {
      user {
        id
        username
        name
        isAdmin
        isConnectedToDiscord
      }
      submissions {
        id
        status
        mrUrl
        diff
        viewCount
        comment
        order
        challengeId
        lessonId
        reviewer {
          id
          username
        }
        user {
          id
        }
        createdAt
        updatedAt
        comments {
          content
          submissionId
          createdAt
          authorId
          line
          fileName
          author {
            username
            name
          }
        }
      }
      lessonStatus {
        lessonId
        passedAt
        starGiven
      }
    }
    alerts {
      id
      text
      type
      url
      urlCaption
    }
  }
`
export type GetAppProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetAppQuery,
    GetAppQueryVariables
  >
} & TChildProps
export function withGetApp<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetAppQuery,
    GetAppQueryVariables,
    GetAppProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetAppQuery,
    GetAppQueryVariables,
    GetAppProps<TChildProps, TDataName>
  >(GetAppDocument, {
    alias: 'getApp',
    ...operationOptions
  })
}

/**
 * __useGetAppQuery__
 *
 * To run a query within a React component, call `useGetAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAppQuery, GetAppQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAppQuery, GetAppQueryVariables>(
    GetAppDocument,
    options
  )
}
export function useGetAppLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAppQuery, GetAppQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAppQuery, GetAppQueryVariables>(
    GetAppDocument,
    options
  )
}
export type GetAppQueryHookResult = ReturnType<typeof useGetAppQuery>
export type GetAppLazyQueryHookResult = ReturnType<typeof useGetAppLazyQuery>
export type GetAppQueryResult = Apollo.QueryResult<
  GetAppQuery,
  GetAppQueryVariables
>
export const LessonMentorsDocument = gql`
  query lessonMentors($lessonId: Int!) {
    getLessonMentors(lessonId: $lessonId) {
      username
      name
      id
    }
  }
`
export type LessonMentorsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    LessonMentorsQuery,
    LessonMentorsQueryVariables
  >
} & TChildProps
export function withLessonMentors<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LessonMentorsQuery,
    LessonMentorsQueryVariables,
    LessonMentorsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    LessonMentorsQuery,
    LessonMentorsQueryVariables,
    LessonMentorsProps<TChildProps, TDataName>
  >(LessonMentorsDocument, {
    alias: 'lessonMentors',
    ...operationOptions
  })
}

/**
 * __useLessonMentorsQuery__
 *
 * To run a query within a React component, call `useLessonMentorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLessonMentorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLessonMentorsQuery({
 *   variables: {
 *      lessonId: // value for 'lessonId'
 *   },
 * });
 */
export function useLessonMentorsQuery(
  baseOptions: Apollo.QueryHookOptions<
    LessonMentorsQuery,
    LessonMentorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LessonMentorsQuery, LessonMentorsQueryVariables>(
    LessonMentorsDocument,
    options
  )
}
export function useLessonMentorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LessonMentorsQuery,
    LessonMentorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LessonMentorsQuery, LessonMentorsQueryVariables>(
    LessonMentorsDocument,
    options
  )
}
export type LessonMentorsQueryHookResult = ReturnType<
  typeof useLessonMentorsQuery
>
export type LessonMentorsLazyQueryHookResult = ReturnType<
  typeof useLessonMentorsLazyQuery
>
export type LessonMentorsQueryResult = Apollo.QueryResult<
  LessonMentorsQuery,
  LessonMentorsQueryVariables
>
export const GetLessonsDocument = gql`
  query getLessons {
    lessons {
      id
      title
      slug
      description
      docUrl
      githubUrl
      videoUrl
      order
      challenges {
        id
        description
        title
        order
      }
      chatUrl
    }
  }
`
export type GetLessonsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetLessonsQuery,
    GetLessonsQueryVariables
  >
} & TChildProps
export function withGetLessons<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetLessonsQuery,
    GetLessonsQueryVariables,
    GetLessonsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetLessonsQuery,
    GetLessonsQueryVariables,
    GetLessonsProps<TChildProps, TDataName>
  >(GetLessonsDocument, {
    alias: 'getLessons',
    ...operationOptions
  })
}

/**
 * __useGetLessonsQuery__
 *
 * To run a query within a React component, call `useGetLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLessonsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLessonsQuery,
    GetLessonsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetLessonsQuery, GetLessonsQueryVariables>(
    GetLessonsDocument,
    options
  )
}
export function useGetLessonsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLessonsQuery,
    GetLessonsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetLessonsQuery, GetLessonsQueryVariables>(
    GetLessonsDocument,
    options
  )
}
export type GetLessonsQueryHookResult = ReturnType<typeof useGetLessonsQuery>
export type GetLessonsLazyQueryHookResult = ReturnType<
  typeof useGetLessonsLazyQuery
>
export type GetLessonsQueryResult = Apollo.QueryResult<
  GetLessonsQuery,
  GetLessonsQueryVariables
>
export const GetPreviousSubmissionsDocument = gql`
  query getPreviousSubmissions($challengeId: Int!, $userId: Int!) {
    getPreviousSubmissions(challengeId: $challengeId, userId: $userId) {
      id
      status
      diff
      comment
      challenge {
        title
      }
      challengeId
      lessonId
      user {
        id
        username
      }
      reviewer {
        id
        username
        name
      }
      comments {
        content
        submissionId
        createdAt
        authorId
        line
        fileName
        author {
          username
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`
export type GetPreviousSubmissionsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetPreviousSubmissionsQuery,
    GetPreviousSubmissionsQueryVariables
  >
} & TChildProps
export function withGetPreviousSubmissions<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetPreviousSubmissionsQuery,
    GetPreviousSubmissionsQueryVariables,
    GetPreviousSubmissionsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetPreviousSubmissionsQuery,
    GetPreviousSubmissionsQueryVariables,
    GetPreviousSubmissionsProps<TChildProps, TDataName>
  >(GetPreviousSubmissionsDocument, {
    alias: 'getPreviousSubmissions',
    ...operationOptions
  })
}

/**
 * __useGetPreviousSubmissionsQuery__
 *
 * To run a query within a React component, call `useGetPreviousSubmissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreviousSubmissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreviousSubmissionsQuery({
 *   variables: {
 *      challengeId: // value for 'challengeId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetPreviousSubmissionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPreviousSubmissionsQuery,
    GetPreviousSubmissionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPreviousSubmissionsQuery,
    GetPreviousSubmissionsQueryVariables
  >(GetPreviousSubmissionsDocument, options)
}
export function useGetPreviousSubmissionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPreviousSubmissionsQuery,
    GetPreviousSubmissionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPreviousSubmissionsQuery,
    GetPreviousSubmissionsQueryVariables
  >(GetPreviousSubmissionsDocument, options)
}
export type GetPreviousSubmissionsQueryHookResult = ReturnType<
  typeof useGetPreviousSubmissionsQuery
>
export type GetPreviousSubmissionsLazyQueryHookResult = ReturnType<
  typeof useGetPreviousSubmissionsLazyQuery
>
export type GetPreviousSubmissionsQueryResult = Apollo.QueryResult<
  GetPreviousSubmissionsQuery,
  GetPreviousSubmissionsQueryVariables
>
export const GetSessionDocument = gql`
  query getSession {
    session {
      user {
        id
        username
        name
        isAdmin
        isConnectedToDiscord
      }
      submissions {
        id
        status
        mrUrl
        diff
        viewCount
        comment
        order
        challengeId
        lessonId
        reviewer {
          id
          username
        }
        createdAt
        updatedAt
      }
      lessonStatus {
        lessonId
        passedAt
        starGiven
      }
    }
  }
`
export type GetSessionProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    GetSessionQuery,
    GetSessionQueryVariables
  >
} & TChildProps
export function withGetSession<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetSessionQuery,
    GetSessionQueryVariables,
    GetSessionProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetSessionQuery,
    GetSessionQueryVariables,
    GetSessionProps<TChildProps, TDataName>
  >(GetSessionDocument, {
    alias: 'getSession',
    ...operationOptions
  })
}

/**
 * __useGetSessionQuery__
 *
 * To run a query within a React component, call `useGetSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSessionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSessionQuery,
    GetSessionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSessionQuery, GetSessionQueryVariables>(
    GetSessionDocument,
    options
  )
}
export function useGetSessionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSessionQuery,
    GetSessionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetSessionQuery, GetSessionQueryVariables>(
    GetSessionDocument,
    options
  )
}
export type GetSessionQueryHookResult = ReturnType<typeof useGetSessionQuery>
export type GetSessionLazyQueryHookResult = ReturnType<
  typeof useGetSessionLazyQuery
>
export type GetSessionQueryResult = Apollo.QueryResult<
  GetSessionQuery,
  GetSessionQueryVariables
>
export const SubmissionsDocument = gql`
  query submissions($lessonId: Int!) {
    submissions(lessonId: $lessonId) {
      id
      status
      diff
      comment
      challenge {
        title
      }
      challengeId
      lessonId
      user {
        id
        username
      }
      reviewer {
        id
        username
        name
      }
      comments {
        content
        submissionId
        createdAt
        authorId
        line
        fileName
        author {
          username
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`
export type SubmissionsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    SubmissionsQuery,
    SubmissionsQueryVariables
  >
} & TChildProps
export function withSubmissions<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    SubmissionsQuery,
    SubmissionsQueryVariables,
    SubmissionsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    SubmissionsQuery,
    SubmissionsQueryVariables,
    SubmissionsProps<TChildProps, TDataName>
  >(SubmissionsDocument, {
    alias: 'submissions',
    ...operationOptions
  })
}

/**
 * __useSubmissionsQuery__
 *
 * To run a query within a React component, call `useSubmissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubmissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubmissionsQuery({
 *   variables: {
 *      lessonId: // value for 'lessonId'
 *   },
 * });
 */
export function useSubmissionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    SubmissionsQuery,
    SubmissionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SubmissionsQuery, SubmissionsQueryVariables>(
    SubmissionsDocument,
    options
  )
}
export function useSubmissionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SubmissionsQuery,
    SubmissionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SubmissionsQuery, SubmissionsQueryVariables>(
    SubmissionsDocument,
    options
  )
}
export type SubmissionsQueryHookResult = ReturnType<typeof useSubmissionsQuery>
export type SubmissionsLazyQueryHookResult = ReturnType<
  typeof useSubmissionsLazyQuery
>
export type SubmissionsQueryResult = Apollo.QueryResult<
  SubmissionsQuery,
  SubmissionsQueryVariables
>
export const LoginDocument = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      success
      username
      cliToken
      error
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>
export type LoginProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    LoginMutation,
    LoginMutationVariables
  >
} & TChildProps
export function withLogin<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps, TDataName>
  >(LoginDocument, {
    alias: 'login',
    ...operationOptions
  })
}

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const LogoutDocument = gql`
  mutation logout {
    logout {
      success
      username
      error
    }
  }
`
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>
export type LogoutProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    LogoutMutation,
    LogoutMutationVariables
  >
} & TChildProps
export function withLogout<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LogoutMutation,
    LogoutMutationVariables,
    LogoutProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    LogoutMutation,
    LogoutMutationVariables,
    LogoutProps<TChildProps, TDataName>
  >(LogoutDocument, {
    alias: 'logout',
    ...operationOptions
  })
}

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  )
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>
export const RejectSubmissionDocument = gql`
  mutation rejectSubmission(
    $submissionId: Int!
    $comment: String!
    $lessonId: Int!
  ) {
    rejectSubmission(
      id: $submissionId
      comment: $comment
      lessonId: $lessonId
    ) {
      id
      comment
      status
    }
  }
`
export type RejectSubmissionMutationFn = Apollo.MutationFunction<
  RejectSubmissionMutation,
  RejectSubmissionMutationVariables
>
export type RejectSubmissionProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    RejectSubmissionMutation,
    RejectSubmissionMutationVariables
  >
} & TChildProps
export function withRejectSubmission<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RejectSubmissionMutation,
    RejectSubmissionMutationVariables,
    RejectSubmissionProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RejectSubmissionMutation,
    RejectSubmissionMutationVariables,
    RejectSubmissionProps<TChildProps, TDataName>
  >(RejectSubmissionDocument, {
    alias: 'rejectSubmission',
    ...operationOptions
  })
}

/**
 * __useRejectSubmissionMutation__
 *
 * To run a mutation, you first call `useRejectSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectSubmissionMutation, { data, loading, error }] = useRejectSubmissionMutation({
 *   variables: {
 *      submissionId: // value for 'submissionId'
 *      comment: // value for 'comment'
 *      lessonId: // value for 'lessonId'
 *   },
 * });
 */
export function useRejectSubmissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RejectSubmissionMutation,
    RejectSubmissionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RejectSubmissionMutation,
    RejectSubmissionMutationVariables
  >(RejectSubmissionDocument, options)
}
export type RejectSubmissionMutationHookResult = ReturnType<
  typeof useRejectSubmissionMutation
>
export type RejectSubmissionMutationResult =
  Apollo.MutationResult<RejectSubmissionMutation>
export type RejectSubmissionMutationOptions = Apollo.BaseMutationOptions<
  RejectSubmissionMutation,
  RejectSubmissionMutationVariables
>
export const RemoveAlertDocument = gql`
  mutation removeAlert($id: Int!) {
    removeAlert(id: $id) {
      success
    }
  }
`
export type RemoveAlertMutationFn = Apollo.MutationFunction<
  RemoveAlertMutation,
  RemoveAlertMutationVariables
>
export type RemoveAlertProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    RemoveAlertMutation,
    RemoveAlertMutationVariables
  >
} & TChildProps
export function withRemoveAlert<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RemoveAlertMutation,
    RemoveAlertMutationVariables,
    RemoveAlertProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RemoveAlertMutation,
    RemoveAlertMutationVariables,
    RemoveAlertProps<TChildProps, TDataName>
  >(RemoveAlertDocument, {
    alias: 'removeAlert',
    ...operationOptions
  })
}

/**
 * __useRemoveAlertMutation__
 *
 * To run a mutation, you first call `useRemoveAlertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAlertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAlertMutation, { data, loading, error }] = useRemoveAlertMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveAlertMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveAlertMutation,
    RemoveAlertMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RemoveAlertMutation, RemoveAlertMutationVariables>(
    RemoveAlertDocument,
    options
  )
}
export type RemoveAlertMutationHookResult = ReturnType<
  typeof useRemoveAlertMutation
>
export type RemoveAlertMutationResult =
  Apollo.MutationResult<RemoveAlertMutation>
export type RemoveAlertMutationOptions = Apollo.BaseMutationOptions<
  RemoveAlertMutation,
  RemoveAlertMutationVariables
>
export const ReqPwResetDocument = gql`
  mutation reqPwReset($userOrEmail: String!) {
    reqPwReset(userOrEmail: $userOrEmail) {
      success
    }
  }
`
export type ReqPwResetMutationFn = Apollo.MutationFunction<
  ReqPwResetMutation,
  ReqPwResetMutationVariables
>
export type ReqPwResetProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    ReqPwResetMutation,
    ReqPwResetMutationVariables
  >
} & TChildProps
export function withReqPwReset<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ReqPwResetMutation,
    ReqPwResetMutationVariables,
    ReqPwResetProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    ReqPwResetMutation,
    ReqPwResetMutationVariables,
    ReqPwResetProps<TChildProps, TDataName>
  >(ReqPwResetDocument, {
    alias: 'reqPwReset',
    ...operationOptions
  })
}

/**
 * __useReqPwResetMutation__
 *
 * To run a mutation, you first call `useReqPwResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReqPwResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reqPwResetMutation, { data, loading, error }] = useReqPwResetMutation({
 *   variables: {
 *      userOrEmail: // value for 'userOrEmail'
 *   },
 * });
 */
export function useReqPwResetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ReqPwResetMutation,
    ReqPwResetMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ReqPwResetMutation, ReqPwResetMutationVariables>(
    ReqPwResetDocument,
    options
  )
}
export type ReqPwResetMutationHookResult = ReturnType<
  typeof useReqPwResetMutation
>
export type ReqPwResetMutationResult = Apollo.MutationResult<ReqPwResetMutation>
export type ReqPwResetMutationOptions = Apollo.BaseMutationOptions<
  ReqPwResetMutation,
  ReqPwResetMutationVariables
>
export const SetStarDocument = gql`
  mutation setStar($mentorId: Int!, $lessonId: Int!, $comment: String) {
    setStar(mentorId: $mentorId, lessonId: $lessonId, comment: $comment) {
      success
    }
  }
`
export type SetStarMutationFn = Apollo.MutationFunction<
  SetStarMutation,
  SetStarMutationVariables
>
export type SetStarProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    SetStarMutation,
    SetStarMutationVariables
  >
} & TChildProps
export function withSetStar<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    SetStarMutation,
    SetStarMutationVariables,
    SetStarProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    SetStarMutation,
    SetStarMutationVariables,
    SetStarProps<TChildProps, TDataName>
  >(SetStarDocument, {
    alias: 'setStar',
    ...operationOptions
  })
}

/**
 * __useSetStarMutation__
 *
 * To run a mutation, you first call `useSetStarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetStarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setStarMutation, { data, loading, error }] = useSetStarMutation({
 *   variables: {
 *      mentorId: // value for 'mentorId'
 *      lessonId: // value for 'lessonId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useSetStarMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetStarMutation,
    SetStarMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SetStarMutation, SetStarMutationVariables>(
    SetStarDocument,
    options
  )
}
export type SetStarMutationHookResult = ReturnType<typeof useSetStarMutation>
export type SetStarMutationResult = Apollo.MutationResult<SetStarMutation>
export type SetStarMutationOptions = Apollo.BaseMutationOptions<
  SetStarMutation,
  SetStarMutationVariables
>
export const SignupDocument = gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $username
    ) {
      success
      username
      error
      cliToken
    }
  }
`
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>
export type SignupProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    SignupMutation,
    SignupMutationVariables
  >
} & TChildProps
export function withSignup<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    SignupMutation,
    SignupMutationVariables,
    SignupProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    SignupMutation,
    SignupMutationVariables,
    SignupProps<TChildProps, TDataName>
  >(SignupDocument, {
    alias: 'signup',
    ...operationOptions
  })
}

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    options
  )
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>
export const UpdateChallengeDocument = gql`
  mutation updateChallenge(
    $lessonId: Int!
    $order: Int!
    $description: String!
    $title: String!
    $id: Int!
  ) {
    updateChallenge(
      id: $id
      lessonId: $lessonId
      order: $order
      description: $description
      title: $title
    ) {
      id
      docUrl
      githubUrl
      videoUrl
      chatUrl
      order
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
export type UpdateChallengeMutationFn = Apollo.MutationFunction<
  UpdateChallengeMutation,
  UpdateChallengeMutationVariables
>
export type UpdateChallengeProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateChallengeMutation,
    UpdateChallengeMutationVariables
  >
} & TChildProps
export function withUpdateChallenge<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateChallengeMutation,
    UpdateChallengeMutationVariables,
    UpdateChallengeProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateChallengeMutation,
    UpdateChallengeMutationVariables,
    UpdateChallengeProps<TChildProps, TDataName>
  >(UpdateChallengeDocument, {
    alias: 'updateChallenge',
    ...operationOptions
  })
}

/**
 * __useUpdateChallengeMutation__
 *
 * To run a mutation, you first call `useUpdateChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChallengeMutation, { data, loading, error }] = useUpdateChallengeMutation({
 *   variables: {
 *      lessonId: // value for 'lessonId'
 *      order: // value for 'order'
 *      description: // value for 'description'
 *      title: // value for 'title'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateChallengeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateChallengeMutation,
    UpdateChallengeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateChallengeMutation,
    UpdateChallengeMutationVariables
  >(UpdateChallengeDocument, options)
}
export type UpdateChallengeMutationHookResult = ReturnType<
  typeof useUpdateChallengeMutation
>
export type UpdateChallengeMutationResult =
  Apollo.MutationResult<UpdateChallengeMutation>
export type UpdateChallengeMutationOptions = Apollo.BaseMutationOptions<
  UpdateChallengeMutation,
  UpdateChallengeMutationVariables
>
export const UpdateLessonDocument = gql`
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
export type UpdateLessonMutationFn = Apollo.MutationFunction<
  UpdateLessonMutation,
  UpdateLessonMutationVariables
>
export type UpdateLessonProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    UpdateLessonMutation,
    UpdateLessonMutationVariables
  >
} & TChildProps
export function withUpdateLesson<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateLessonMutation,
    UpdateLessonMutationVariables,
    UpdateLessonProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateLessonMutation,
    UpdateLessonMutationVariables,
    UpdateLessonProps<TChildProps, TDataName>
  >(UpdateLessonDocument, {
    alias: 'updateLesson',
    ...operationOptions
  })
}

/**
 * __useUpdateLessonMutation__
 *
 * To run a mutation, you first call `useUpdateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonMutation, { data, loading, error }] = useUpdateLessonMutation({
 *   variables: {
 *      id: // value for 'id'
 *      docUrl: // value for 'docUrl'
 *      githubUrl: // value for 'githubUrl'
 *      videoUrl: // value for 'videoUrl'
 *      chatUrl: // value for 'chatUrl'
 *      order: // value for 'order'
 *      slug: // value for 'slug'
 *      description: // value for 'description'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateLessonMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLessonMutation,
    UpdateLessonMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateLessonMutation,
    UpdateLessonMutationVariables
  >(UpdateLessonDocument, options)
}
export type UpdateLessonMutationHookResult = ReturnType<
  typeof useUpdateLessonMutation
>
export type UpdateLessonMutationResult =
  Apollo.MutationResult<UpdateLessonMutation>
export type UpdateLessonMutationOptions = Apollo.BaseMutationOptions<
  UpdateLessonMutation,
  UpdateLessonMutationVariables
>
export const ChangePwDocument = gql`
  mutation changePw($token: String!, $password: String!) {
    changePw(token: $token, password: $password) {
      success
    }
  }
`
export type ChangePwMutationFn = Apollo.MutationFunction<
  ChangePwMutation,
  ChangePwMutationVariables
>
export type ChangePwProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: Apollo.MutationFunction<
    ChangePwMutation,
    ChangePwMutationVariables
  >
} & TChildProps
export function withChangePw<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ChangePwMutation,
    ChangePwMutationVariables,
    ChangePwProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    ChangePwMutation,
    ChangePwMutationVariables,
    ChangePwProps<TChildProps, TDataName>
  >(ChangePwDocument, {
    alias: 'changePw',
    ...operationOptions
  })
}

/**
 * __useChangePwMutation__
 *
 * To run a mutation, you first call `useChangePwMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePwMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePwMutation, { data, loading, error }] = useChangePwMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangePwMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ChangePwMutation,
    ChangePwMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ChangePwMutation, ChangePwMutationVariables>(
    ChangePwDocument,
    options
  )
}
export type ChangePwMutationHookResult = ReturnType<typeof useChangePwMutation>
export type ChangePwMutationResult = Apollo.MutationResult<ChangePwMutation>
export type ChangePwMutationOptions = Apollo.BaseMutationOptions<
  ChangePwMutation,
  ChangePwMutationVariables
>
export const UserInfoDocument = gql`
  query userInfo($username: String!) {
    lessons {
      id
      title
      description
      docUrl
      githubUrl
      videoUrl
      order
      challenges {
        id
        title
        description
        order
      }
      chatUrl
    }
    userInfo(username: $username) {
      user {
        id
        username
        name
        discordUserId
        discordUsername
        discordAvatarUrl
      }
      submissions {
        id
        status
        mrUrl
        diff
        viewCount
        comment
        order
        challengeId
        lessonId
        reviewer {
          id
          username
        }
        createdAt
        updatedAt
      }
      lessonStatus {
        lessonId
        passedAt
        starsReceived {
          lessonId
          comment
          student {
            username
            name
          }
          lesson {
            title
            order
          }
        }
      }
    }
  }
`
export type UserInfoProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    UserInfoQuery,
    UserInfoQueryVariables
  >
} & TChildProps
export function withUserInfo<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UserInfoQuery,
    UserInfoQueryVariables,
    UserInfoProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    UserInfoQuery,
    UserInfoQueryVariables,
    UserInfoProps<TChildProps, TDataName>
  >(UserInfoDocument, {
    alias: 'userInfo',
    ...operationOptions
  })
}

/**
 * __useUserInfoQuery__
 *
 * To run a query within a React component, call `useUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserInfoQuery(
  baseOptions: Apollo.QueryHookOptions<UserInfoQuery, UserInfoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserInfoQuery, UserInfoQueryVariables>(
    UserInfoDocument,
    options
  )
}
export function useUserInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserInfoQuery,
    UserInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserInfoQuery, UserInfoQueryVariables>(
    UserInfoDocument,
    options
  )
}
export type UserInfoQueryHookResult = ReturnType<typeof useUserInfoQuery>
export type UserInfoLazyQueryHookResult = ReturnType<
  typeof useUserInfoLazyQuery
>
export type UserInfoQueryResult = Apollo.QueryResult<
  UserInfoQuery,
  UserInfoQueryVariables
>
export type AlertKeySpecifier = (
  | 'id'
  | 'text'
  | 'type'
  | 'url'
  | 'urlCaption'
  | AlertKeySpecifier
)[]
export type AlertFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  text?: FieldPolicy<any> | FieldReadFunction<any>
  type?: FieldPolicy<any> | FieldReadFunction<any>
  url?: FieldPolicy<any> | FieldReadFunction<any>
  urlCaption?: FieldPolicy<any> | FieldReadFunction<any>
}
export type AuthResponseKeySpecifier = (
  | 'success'
  | 'username'
  | 'error'
  | 'cliToken'
  | AuthResponseKeySpecifier
)[]
export type AuthResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>
  username?: FieldPolicy<any> | FieldReadFunction<any>
  error?: FieldPolicy<any> | FieldReadFunction<any>
  cliToken?: FieldPolicy<any> | FieldReadFunction<any>
}
export type ChallengeKeySpecifier = (
  | 'id'
  | 'description'
  | 'lessonId'
  | 'title'
  | 'order'
  | ChallengeKeySpecifier
)[]
export type ChallengeFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  description?: FieldPolicy<any> | FieldReadFunction<any>
  lessonId?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
  order?: FieldPolicy<any> | FieldReadFunction<any>
}
export type CommentKeySpecifier = (
  | 'id'
  | 'fileName'
  | 'line'
  | 'content'
  | 'authorId'
  | 'submissionId'
  | 'createdAt'
  | 'author'
  | 'submission'
  | CommentKeySpecifier
)[]
export type CommentFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  fileName?: FieldPolicy<any> | FieldReadFunction<any>
  line?: FieldPolicy<any> | FieldReadFunction<any>
  content?: FieldPolicy<any> | FieldReadFunction<any>
  authorId?: FieldPolicy<any> | FieldReadFunction<any>
  submissionId?: FieldPolicy<any> | FieldReadFunction<any>
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  author?: FieldPolicy<any> | FieldReadFunction<any>
  submission?: FieldPolicy<any> | FieldReadFunction<any>
}
export type LessonKeySpecifier = (
  | 'id'
  | 'description'
  | 'docUrl'
  | 'githubUrl'
  | 'videoUrl'
  | 'order'
  | 'slug'
  | 'title'
  | 'challenges'
  | 'users'
  | 'currentUser'
  | 'chatUrl'
  | LessonKeySpecifier
)[]
export type LessonFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  description?: FieldPolicy<any> | FieldReadFunction<any>
  docUrl?: FieldPolicy<any> | FieldReadFunction<any>
  githubUrl?: FieldPolicy<any> | FieldReadFunction<any>
  videoUrl?: FieldPolicy<any> | FieldReadFunction<any>
  order?: FieldPolicy<any> | FieldReadFunction<any>
  slug?: FieldPolicy<any> | FieldReadFunction<any>
  title?: FieldPolicy<any> | FieldReadFunction<any>
  challenges?: FieldPolicy<any> | FieldReadFunction<any>
  users?: FieldPolicy<any> | FieldReadFunction<any>
  currentUser?: FieldPolicy<any> | FieldReadFunction<any>
  chatUrl?: FieldPolicy<any> | FieldReadFunction<any>
}
export type MutationKeySpecifier = (
  | 'setStar'
  | 'login'
  | 'logout'
  | 'reqPwReset'
  | 'changePw'
  | 'changeAdminRights'
  | 'signup'
  | 'addAlert'
  | 'removeAlert'
  | 'createSubmission'
  | 'acceptSubmission'
  | 'rejectSubmission'
  | 'addComment'
  | 'createLesson'
  | 'updateLesson'
  | 'createChallenge'
  | 'updateChallenge'
  | MutationKeySpecifier
)[]
export type MutationFieldPolicy = {
  setStar?: FieldPolicy<any> | FieldReadFunction<any>
  login?: FieldPolicy<any> | FieldReadFunction<any>
  logout?: FieldPolicy<any> | FieldReadFunction<any>
  reqPwReset?: FieldPolicy<any> | FieldReadFunction<any>
  changePw?: FieldPolicy<any> | FieldReadFunction<any>
  changeAdminRights?: FieldPolicy<any> | FieldReadFunction<any>
  signup?: FieldPolicy<any> | FieldReadFunction<any>
  addAlert?: FieldPolicy<any> | FieldReadFunction<any>
  removeAlert?: FieldPolicy<any> | FieldReadFunction<any>
  createSubmission?: FieldPolicy<any> | FieldReadFunction<any>
  acceptSubmission?: FieldPolicy<any> | FieldReadFunction<any>
  rejectSubmission?: FieldPolicy<any> | FieldReadFunction<any>
  addComment?: FieldPolicy<any> | FieldReadFunction<any>
  createLesson?: FieldPolicy<any> | FieldReadFunction<any>
  updateLesson?: FieldPolicy<any> | FieldReadFunction<any>
  createChallenge?: FieldPolicy<any> | FieldReadFunction<any>
  updateChallenge?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QueryKeySpecifier = (
  | 'lessons'
  | 'session'
  | 'allUsers'
  | 'getLessonMentors'
  | 'userInfo'
  | 'isTokenValid'
  | 'submissions'
  | 'alerts'
  | 'getPreviousSubmissions'
  | QueryKeySpecifier
)[]
export type QueryFieldPolicy = {
  lessons?: FieldPolicy<any> | FieldReadFunction<any>
  session?: FieldPolicy<any> | FieldReadFunction<any>
  allUsers?: FieldPolicy<any> | FieldReadFunction<any>
  getLessonMentors?: FieldPolicy<any> | FieldReadFunction<any>
  userInfo?: FieldPolicy<any> | FieldReadFunction<any>
  isTokenValid?: FieldPolicy<any> | FieldReadFunction<any>
  submissions?: FieldPolicy<any> | FieldReadFunction<any>
  alerts?: FieldPolicy<any> | FieldReadFunction<any>
  getPreviousSubmissions?: FieldPolicy<any> | FieldReadFunction<any>
}
export type SessionKeySpecifier = (
  | 'user'
  | 'submissions'
  | 'lessonStatus'
  | SessionKeySpecifier
)[]
export type SessionFieldPolicy = {
  user?: FieldPolicy<any> | FieldReadFunction<any>
  submissions?: FieldPolicy<any> | FieldReadFunction<any>
  lessonStatus?: FieldPolicy<any> | FieldReadFunction<any>
}
export type StarKeySpecifier = (
  | 'id'
  | 'lessonId'
  | 'comment'
  | 'student'
  | 'lesson'
  | StarKeySpecifier
)[]
export type StarFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  lessonId?: FieldPolicy<any> | FieldReadFunction<any>
  comment?: FieldPolicy<any> | FieldReadFunction<any>
  student?: FieldPolicy<any> | FieldReadFunction<any>
  lesson?: FieldPolicy<any> | FieldReadFunction<any>
}
export type SubmissionKeySpecifier = (
  | 'id'
  | 'status'
  | 'mrUrl'
  | 'diff'
  | 'viewCount'
  | 'comment'
  | 'userId'
  | 'order'
  | 'lessonId'
  | 'challengeId'
  | 'challenge'
  | 'reviewer'
  | 'user'
  | 'reviewerId'
  | 'createdAt'
  | 'updatedAt'
  | 'comments'
  | SubmissionKeySpecifier
)[]
export type SubmissionFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  status?: FieldPolicy<any> | FieldReadFunction<any>
  mrUrl?: FieldPolicy<any> | FieldReadFunction<any>
  diff?: FieldPolicy<any> | FieldReadFunction<any>
  viewCount?: FieldPolicy<any> | FieldReadFunction<any>
  comment?: FieldPolicy<any> | FieldReadFunction<any>
  userId?: FieldPolicy<any> | FieldReadFunction<any>
  order?: FieldPolicy<any> | FieldReadFunction<any>
  lessonId?: FieldPolicy<any> | FieldReadFunction<any>
  challengeId?: FieldPolicy<any> | FieldReadFunction<any>
  challenge?: FieldPolicy<any> | FieldReadFunction<any>
  reviewer?: FieldPolicy<any> | FieldReadFunction<any>
  user?: FieldPolicy<any> | FieldReadFunction<any>
  reviewerId?: FieldPolicy<any> | FieldReadFunction<any>
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
  comments?: FieldPolicy<any> | FieldReadFunction<any>
}
export type SuccessResponseKeySpecifier = (
  | 'success'
  | SuccessResponseKeySpecifier
)[]
export type SuccessResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>
}
export type TokenResponseKeySpecifier = (
  | 'success'
  | 'token'
  | TokenResponseKeySpecifier
)[]
export type TokenResponseFieldPolicy = {
  success?: FieldPolicy<any> | FieldReadFunction<any>
  token?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UserKeySpecifier = (
  | 'id'
  | 'username'
  | 'userLesson'
  | 'email'
  | 'name'
  | 'isAdmin'
  | 'isConnectedToDiscord'
  | 'cliToken'
  | 'discordUserId'
  | 'discordUsername'
  | 'discordAvatarUrl'
  | UserKeySpecifier
)[]
export type UserFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  username?: FieldPolicy<any> | FieldReadFunction<any>
  userLesson?: FieldPolicy<any> | FieldReadFunction<any>
  email?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
  isAdmin?: FieldPolicy<any> | FieldReadFunction<any>
  isConnectedToDiscord?: FieldPolicy<any> | FieldReadFunction<any>
  cliToken?: FieldPolicy<any> | FieldReadFunction<any>
  discordUserId?: FieldPolicy<any> | FieldReadFunction<any>
  discordUsername?: FieldPolicy<any> | FieldReadFunction<any>
  discordAvatarUrl?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UserLessonKeySpecifier = (
  | 'id'
  | 'userId'
  | 'lessonId'
  | 'passedAt'
  | 'starsReceived'
  | 'starGiven'
  | UserLessonKeySpecifier
)[]
export type UserLessonFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>
  userId?: FieldPolicy<any> | FieldReadFunction<any>
  lessonId?: FieldPolicy<any> | FieldReadFunction<any>
  passedAt?: FieldPolicy<any> | FieldReadFunction<any>
  starsReceived?: FieldPolicy<any> | FieldReadFunction<any>
  starGiven?: FieldPolicy<any> | FieldReadFunction<any>
}
export type StrictTypedTypePolicies = {
  Alert?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AlertKeySpecifier
      | (() => undefined | AlertKeySpecifier)
    fields?: AlertFieldPolicy
  }
  AuthResponse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | AuthResponseKeySpecifier
      | (() => undefined | AuthResponseKeySpecifier)
    fields?: AuthResponseFieldPolicy
  }
  Challenge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ChallengeKeySpecifier
      | (() => undefined | ChallengeKeySpecifier)
    fields?: ChallengeFieldPolicy
  }
  Comment?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CommentKeySpecifier
      | (() => undefined | CommentKeySpecifier)
    fields?: CommentFieldPolicy
  }
  Lesson?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | LessonKeySpecifier
      | (() => undefined | LessonKeySpecifier)
    fields?: LessonFieldPolicy
  }
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier)
    fields?: MutationFieldPolicy
  }
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier)
    fields?: QueryFieldPolicy
  }
  Session?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SessionKeySpecifier
      | (() => undefined | SessionKeySpecifier)
    fields?: SessionFieldPolicy
  }
  Star?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | StarKeySpecifier | (() => undefined | StarKeySpecifier)
    fields?: StarFieldPolicy
  }
  Submission?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SubmissionKeySpecifier
      | (() => undefined | SubmissionKeySpecifier)
    fields?: SubmissionFieldPolicy
  }
  SuccessResponse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | SuccessResponseKeySpecifier
      | (() => undefined | SuccessResponseKeySpecifier)
    fields?: SuccessResponseFieldPolicy
  }
  TokenResponse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | TokenResponseKeySpecifier
      | (() => undefined | TokenResponseKeySpecifier)
    fields?: TokenResponseFieldPolicy
  }
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier)
    fields?: UserFieldPolicy
  }
  UserLesson?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UserLessonKeySpecifier
      | (() => undefined | UserLessonKeySpecifier)
    fields?: UserLessonFieldPolicy
  }
}
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies
