import React from 'react'
import styles from './mypoint.module.css'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import updown from '../../assets/updow.png'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from 'react-router-dom'

const Mypoint: React.FC = () => {
  const navigate = useNavigate()

  const askClick = () => {
    navigate('/childwallet/ask')
  }

  const currencyButton = () => {
    navigate('/currency/detail')
  }

  function scrollToAnchor(anchorId: string) {
    const anchorElement = document.getElementById(anchorId)
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className={styles.container}>
      {/* 메인1 */}
      <div className={styles.pointtitle}>획득 포인트</div>
      <div className={styles.main}>
        <div className={styles.horizontal}>
          <div className={styles.possibletext}>이승재님의 환전 가능 금액 </div>
          <div className={styles.possiblemoney}>총 20,226원</div>
        </div>

        <div className={styles.line}></div>

        {/* 미국 */}
        <div className={styles.horizontal2}>
          <div className={styles.country}>미국달러</div>
          <div className={styles.horizontal1}>
            <div className={styles.context}>보유 7.5달러</div>
            <div className={styles.money}>3,996.99원</div>
          </div>
          <div className={styles.smaller}>
            <div className={styles.smallertext}>7.5달러</div>
            <div className={styles.smallertext}>3,996.99원</div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              onClick={askClick}
              sx={{
                width: 'clamp(100px, 15vw, 140px)',
                height: 'clamp(35px, 6vw, 45px)',
                fontSize: 'clamp(14px, 1.7vw, 17px)',
                paddingBottom: '3px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
        </div>

        {/* 일본 */}
        <div className={styles.horizontal2}>
          <div className={styles.country}>일본엔</div>
          <div className={styles.horizontal1}>
            <div className={styles.context}>보유 10.5엔</div>
            <div className={styles.money}>1,771.58원</div>
          </div>
          <div className={styles.smaller}>
            <div className={styles.smallertext}>10.5엔</div>
            <div className={styles.smallertext}>1,771.58원</div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              onClick={askClick}
              sx={{
                width: 'clamp(100px, 15vw, 140px)',
                height: 'clamp(35px, 6vw, 45px)',
                fontSize: 'clamp(14px, 1.7vw, 17px)',
                paddingBottom: '3px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
        </div>

        {/* 유럽 */}
        <div className={styles.horizontal2}>
          <div className={styles.country}>유럽유로</div>
          <div className={styles.horizontal1}>
            <div className={styles.context}>보유 2.0유로</div>
            <div className={styles.money}>3,000원</div>
          </div>
          <div className={styles.smaller}>
            <div className={styles.smallertext}>2.0유로</div>
            <div className={styles.smallertext}>3,000원</div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              onClick={askClick}
              sx={{
                width: 'clamp(100px, 15vw, 140px)',
                height: 'clamp(35px, 6vw, 45px)',
                fontSize: 'clamp(14px, 1.7vw, 17px)',
                paddingBottom: '3px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
        </div>

        {/* 중국 */}
        <div className={styles.horizontal2}>
          <div className={styles.country}>중국위안</div>
          <div className={styles.horizontal1}>
            <div className={styles.context}>보유 0위안</div>
            <div className={styles.money}>0원</div>
          </div>
          <div className={styles.smaller}>
            <div className={styles.smallertext}>0위안</div>
            <div className={styles.smallertext}>0원</div>
          </div>
          <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              onClick={askClick}
              sx={{
                width: 'clamp(100px, 15vw, 140px)',
                height: 'clamp(35px, 6vw, 45px)',
                fontSize: 'clamp(14px, 1.7vw, 17px)',
                paddingBottom: '3px',
                backgroundColor: '#0064FF',
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              환전 요청
            </Button>
          </div>
        </div>
      </div>

      <div className={`${styles.main} ${styles.help}`}>
        <Link
          onClick={() => scrollToAnchor('my-anchor')}
          className="link-pointer"
          sx={{
            color: '#bdc6d7;',
            textDecorationColor: '#bdc6d7',
          }}
        >
          실시간 환율 확인하기
        </Link>
      </div>

      <div className={styles.main2}>
        <div className={styles.pointtitle} id="my-anchor">
          실시간 환율
        </div>
        <div className={styles.subtitle}>
          어제보다
          <img
            src={updown}
            alt="boy"
            style={{ height: '20px', marginTop: 3, marginLeft: '15px' }}
          />
        </div>
        <div className={styles.maindiv}>
          {/* Material UI: Lists */}
          <List>
            <ListItem disablePadding >
              <ListItemButton sx={{ minHeight: '100px', alignItems: 'center' }}>
                <ListItemText primary="미국달러" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ minHeight: '100px', alignItems: 'center' }}>
                <ListItemText primary="일본엔" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ minHeight: '100px', alignItems: 'center' }}>
                <ListItemText primary="유럽유로" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ minHeight: '100px', alignItems: 'center' }}>
                <ListItemText primary="중국위안" />
              </ListItemButton>
            </ListItem>
          </List>
          {/* <div>
            미국달러 1,300원<button onClick={currencyButton}>버튼</button>
          </div>
          <div>
            일본엔 900원<button onClick={currencyButton}>버튼</button>
          </div>
          <div>
            유럽유로 1400원<button onClick={currencyButton}>버튼</button>
          </div>
          <div>
            중국위안 190원<button onClick={currencyButton}>버튼</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Mypoint
