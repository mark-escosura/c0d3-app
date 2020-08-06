import React from 'react'
import '../scss/profileSubmissions.scss'
import '../scss/profileLessons.scss'
import { Star as StarType } from '../@types/lesson'
import { Star } from 'react-feather'

type ChallengeStatusProps = {
  challengesData: Challenge[]
}

type LessonChallengeProps = {
  lessons: LessonChallenge[]
}

type LessonChallenge = {
  order: number
  title: string
  challenges: Challenge[]
  starsReceived: StarType[]
}

type Challenge = {
  challengeNumber: number
  challengeStatus?: string
}

export const SubmissionStatus: React.FC<ChallengeStatusProps> = ({
  challengesData
}) => {
  const submissionsStatus = challengesData.map(
    (eachChallenge: Challenge, challengeId: number) => {
      let challengeStatus = 'bg-gray'
      if (eachChallenge.challengeStatus === 'passed') {
        challengeStatus = 'bg-success'
      }
      if (eachChallenge.challengeStatus === 'needMoreWork') {
        challengeStatus = 'bg-danger'
      }
      if (eachChallenge.challengeStatus === 'pending') {
        challengeStatus = 'bg-warning'
      }
      return (
        <span
          key={challengeId}
          className={`challenge_status ${challengeStatus}`}
        />
      )
    }
  )
  return <div>{submissionsStatus}</div>
}

const ProfileSubmissions: React.FC<LessonChallengeProps> = ({ lessons }) => {
  const displaySubmissions = lessons.map((lesson, lessonId) => {
    const filterPassedChallenges = lesson.challenges.filter(
      eachChallenge => eachChallenge.challengeStatus === 'passed'
    )
    const starsContainer = (
      <p className={`lessonimage_progressbadge badge badge-pill badge-primary`}>
        {lesson.starsReceived && lesson.starsReceived.length}
        <span className="ml-1">
          <Star size={15} fill="yellow" />
        </span>
      </p>
    )
    const starbadge =
      lesson.starsReceived && lesson.starsReceived.length ? (
        starsContainer
      ) : (
        <></>
      )
    return (
      <div key={lessonId} className="lesson_challenges">
        <div className="lessonimage_container">
          {starbadge}
          <img
            src={`/curriculumAssets/lessonCoversSvg/js-${lesson.order}-cover.svg`}
          />
        </div>
        <div className="lesson_title_container">
          <h6 className="lesson_title">{lesson.title}</h6>
          <h6 className="challenges_stats">
            {`${filterPassedChallenges.length} of ${lesson.challenges.length}  Challenges completed`}
          </h6>
          <SubmissionStatus challengesData={lesson.challenges} />
        </div>
      </div>
    )
  })
  return (
    <div className="card shadow-sm profile-submissions mt-3">
      <div className="card-body">
        <h3>Challenges</h3>
        <div className="display_lessons">{displaySubmissions}</div>
      </div>
    </div>
  )
}

export default ProfileSubmissions
