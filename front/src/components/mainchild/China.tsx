import React, { startTransition, useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { stageSubjectState } from '@/state/StageSubjectAtoms'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'
import { country } from '@/api/child'
import styles from './China.module.css'

const China: React.FC = () => {
  const [stageId, setStageId] = useRecoilState(stageSubjectState)
  const [stageOneAns, setStageOneAns] = useState(0)
  const [stageTwoAns, setStageTwoAns] = useState(0)
  const [stageThreeAns, setStageThreeAns] = useState(0)
  const [stageFourAns, setStageFourAns] = useState(0)
  const [stageFiveAns, setStageFiveAns] = useState(0)
  // 물음표 아이콘 클릭
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  const closeDescription = () => {
    setShowDescription(false)
  }

  const navigate = useNavigate()
  useEffect(() => {
    const fetchChinaStage = async () => {
      try {
        const response = await country(4)
        setStageOneAns(response.data.data[0].answer)
        setStageTwoAns(response.data.data[1].answer)
        setStageThreeAns(response.data.data[2].answer)
        setStageFourAns(response.data.data[3].answer)
        setStageFiveAns(response.data.data[4].answer)
      } catch (error) {
        console.error('API 요청 중 오류 발생: ', error)
      }
    }
    fetchChinaStage()
  }, [])
  const stageStart = (Id: number, answer: number) => {
    // 이전 stage의 정답수가 7이상일때만 활성화
    if (answer >= 7) {
      setStageId(Id)

      startTransition(() => {
        navigate('/mainchild/stage/china')
      })
    } else {
      // 아니면 접근 못함 알림
      alert('접근할 수 없습니다. 미국 스테이지를 먼저 완료 해주세요')
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Stage를 클릭해서 퀴즈를 시작하세요!</h1>
      <div className={styles.backgroundIMG}></div>
      <div className={styles.chinamap}></div>
      <div onClick={() => stageStart(1, 0)} className={styles.stage1}>
        {stageOneAns}/10
      </div>
      <div
        onClick={() => stageStart(2, stageOneAns)}
        className={
          stageOneAns >= 7 ? styles.active_stage2 : styles.unactive_stage2
        }
      >
        {stageTwoAns}/10
      </div>
      <div
        onClick={() => stageStart(3, stageTwoAns)}
        className={
          stageTwoAns >= 7 ? styles.active_stage3 : styles.unactive_stage3
        }
      >
        {stageThreeAns}/10
      </div>
      <div
        onClick={() => stageStart(4, stageThreeAns)}
        className={
          stageThreeAns >= 7 ? styles.active_stage4 : styles.unactive_stage4
        }
      >
        {stageFourAns}/10
      </div>
      <div
        onClick={() => stageStart(5, stageFourAns)}
        className={
          stageFourAns >= 7 ? styles.active_stage5 : styles.unactive_stage5
        }
      >
        {stageFiveAns}/10
      </div>

      <div className={styles.fairyContainer}>
        <div className={styles.fairy}>
          {!showDescription && (
            <FontAwesomeIcon
              icon={faQuestion}
              className={styles.questionIcon}
              onClick={toggleDescription}
            />
          )}
        </div>
        {showDescription && (
          <div className={styles.description}>
            <button className={styles.closeButton} onClick={closeDescription}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p>
              중국에 온 걸 환영해!
              <br />
              연료가 필요하다고? 내가 도와줄게!
              <br />
              간단해. 내가 낸 문제를 맞히면 돼! 어때 쉽지?
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default China
