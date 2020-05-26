import React from 'react'
import { motion } from 'framer-motion'

function HeroSVG() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='70%'
      //   width="359.184"
      //   height="326.636"
      viewBox='0 0 359.184 326.636'
    >
      <g id='img_hero' transform='translate(0 -.008)'>
        <g id='sun'>
          <circle
            id='Ellipse_1'
            cx='36.624'
            cy='36.624'
            r='36.624'
            fill='#ff6584'
            data-name='Ellipse 1'
            transform='translate(58.061 62.344)'
          ></circle>
        </g>
        <path
          id='Path_1'
          fill='#3f3d56'
          d='M496.184 276.46v96.328c0 78.524-56.617 142.175-126.455 142.171H137v-96.328c0-51.474 24.332-96.563 60.774-121.513a120.474 120.474 0 0119.736-10.981 114.79 114.79 0 0112.319-4.592 2.367 2.367 0 01.248-.078q1.85-.569 3.724-1.073a3.95 3.95 0 01.206-.057 113.439 113.439 0 0123.456-3.72c.935-.048 1.87-.087 2.812-.109.337-.013.679-.022 1.024-.022q1.071-.026 2.153-.026z'
          data-name='Path 1'
          transform='translate(-137 -188.82)'
        ></path>
        <path
          id='Path_2'
          fill='#f2f2f2'
          d='M303.078 681c-91.527 0-165.757 28-166.068 62.581h332.136C468.835 709 394.6 681 303.078 681z'
          data-name='Path 2'
          transform='translate(-137.005 -416.937)'
        ></path>
        <g
          id='Group_1'
          data-name='Group 1'
          opacity='0.1'
          transform='translate(102.766 292.095)'
        >
          <ellipse
            id='Ellipse_2'
            cx='34.889'
            cy='9.691'
            data-name='Ellipse 2'
            rx='34.889'
            ry='9.691'
          ></ellipse>
        </g>
        <g
          id='Group_2'
          data-name='Group 2'
          opacity='0.1'
          transform='translate(168.128 274.651)'
        >
          <ellipse
            id='Ellipse_3'
            cx='34.889'
            cy='9.691'
            data-name='Ellipse 3'
            rx='34.889'
            ry='9.691'
          ></ellipse>
        </g>
        <g
          id='Group_3'
          data-name='Group 3'
          opacity='0.1'
          transform='translate(106.017 293)'
        >
          <ellipse
            id='Ellipse_4'
            cx='31.5'
            cy='9'
            data-name='Ellipse 4'
            rx='31.5'
            ry='9'
            transform='translate(-.017)'
          ></ellipse>
        </g>
        <g
          id='Group_4'
          data-name='Group 4'
          opacity='0.1'
          transform='translate(172.136 276)'
        >
          <ellipse
            id='Ellipse_5'
            cx='31'
            cy='8.5'
            data-name='Ellipse 5'
            rx='31'
            ry='8.5'
            transform='translate(-.136)'
          ></ellipse>
        </g>
        <path
          id='Path_3'
          fill='#f2f2f2'
          d='M91.744 580.295h-.794v-.795h-.155v.795H90v.155h.795v.795h.155v-.795h.795z'
          data-name='Path 3'
          transform='translate(-50.75 -326.775)'
        ></path>
        <path
          id='Path_4'
          fill='#f2f2f2'
          d='M676.744 432.3h-.795v-.8h-.155v.8H675v.155h.795v.8h.155v-.8h.795z'
          data-name='Path 4'
          transform='translate(-413.317 -243.319)'
        ></path>
        <path
          id='Path_5'
          fill='#f2f2f2'
          d='M827.744 402.3h-.795v-.8h-.155v.8H826v.155h.795v.8h.155v-.8h.795z'
          data-name='Path 5'
          transform='translate(-510.427 -226.403)'
        ></path>
        <path
          id='Path_6'
          fill='#f2f2f2'
          d='M502.744 482.3h-.8v-.8h-.155v.8H501v.155h.8v.8h.155v-.8h.8z'
          data-name='Path 6'
          transform='translate(-306.773 -271.514)'
        ></path>
        <path
          id='Path_7'
          fill='#f2f2f2'
          d='M783.744 492.3h-.795v-.8h-.155v.8H782v.155h.795v.8h.155v-.8h.795z'
          data-name='Path 7'
          transform='translate(-485.616 -277.153)'
        ></path>
        <path
          id='Path_8'
          fill='#f2f2f2'
          d='M444.744 535.295h-.8v-.795h-.155v.795H443v.155h.8v.795h.155v-.795h.8z'
          data-name='Path 8'
          transform='translate(-271.259 -301.4)'
        ></path>
        <path
          id='Path_9'
          fill='#f2f2f2'
          d='M572.744 537.295h-.795v-.795h-.155v.795H571v.155h.795v.795h.155v-.795h.795z'
          data-name='Path 9'
          transform='translate(-349.636 -302.528)'
        ></path>
        <path
          id='Path_10'
          fill='#f2f2f2'
          d='M93.744 367.3h-.794v-.8h-.155v.8H92v.155h.795v.8h.155v-.8h.795z'
          data-name='Path 10'
          transform='translate(-51.878 -206.666)'
        ></path>
        <g id='astronaut'>
          <motion.g
            animate={{ y: [10, -10, 10] }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
              loop: Infinity,
              repeatDelay: 0.2
            }}
          >
            <path
              id='Path_11'
              fill='#e6e6e6'
              d='M596.836 385.046L585.3 411.622l2.256 3.761-.752 1.253 5.265 2.758v-1.5l2.006-.5 8.525-15.544z'
              data-name='Path 11'
              transform='translate(-359.535 -217.124)'
            ></path>
            <path
              id='Path_12'
              fill='#e6e6e6'
              d='M723.516 532.407s-8.524 13.288 1 15.293 1.755-14.04 1.755-14.04z'
              data-name='Path 12'
              transform='translate(-494.526 -333.146)'
            ></path>
            <path
              id='Path_13'
              fill='#fff'
              d='M747.793 514.209l-3.009 9.778-1.254 12.536-2.256 4.513 2.507 20.308 4.011 4.011 1.755 20.057v9.026l4.763 8.273-6.134 8.707a2.774 2.774 0 002.176 4.375 11.462 11.462 0 005.462-1.548c7.271-3.761 7.02-7.271 7.02-7.271s4.513 0 4.763-3.51-2.758-28.581-2.758-28.581l-2.756-10.783v-29.332h1l.5 25.071 2.256 9.276.251 4.011 3.259 40.114s14.541 4.011 15.293.752-5.516-5.265-5.516-5.265l3.761-7.271v-14.04l-1.254-3.009-2.251-20.307 3.761-4.011 2.006-2.507v-20.057l-2.507-7.772-.752-6.518-4.011-10.029s-18.303-6.017-30.086 1.003z'
              data-name='Path 13'
              transform='translate(-510.436 -320.966)'
            ></path>
            <path
              id='Path_14'
              fill='#52e4c4'
              d='M781.682 364.045a19.054 19.054 0 11-34.348-11.365h.005a19.052 19.052 0 0134.342 11.37z'
              data-name='Path 14'
              transform='translate(-511.339 -227.462)'
            ></path>
            <g
              id='Group_5'
              data-name='Group 5'
              opacity='0.1'
              transform='translate(235.625 118.531)'
            >
              <path
                id='Path_15'
                d='M783.2 357.445l-1.554 8.9c-11.681-30.321-30.261-11.7-30.582-11.37a19.054 19.054 0 0132.136 2.467z'
                data-name='Path 15'
                transform='translate(-751.059 -347.293)'
              ></path>
            </g>
            <path
              id='Path_16'
              fill='#fff'
              d='M784.345 355.145l-1.554 8.9c-11.681-30.321-30.261-11.7-30.582-11.37a19.054 19.054 0 0132.136 2.467z'
              data-name='Path 16'
              transform='translate(-516.142 -227.465)'
            ></path>
            <path
              id='Path_17'
              fill='#fff'
              d='M777.512 359.53l2.612 9.067s-5.422 16.251-30.565 16.817l-.824 2.321-2.758.752-1.254 5.265 3.51 33.345s-1.5 3.259 1 3.009c0 0 16.547-5.516 30.838-.5 0 0 3.009 1.254 2.256-1.5 0 0 10.029-6.268 9.276-12.786s.752-36.855.752-36.855 1.5-8.775-3.009-10.781c.004-.006-6.624-9.284-11.834-8.154z'
              data-name='Path 17'
              transform='translate(-512.937 -235.608)'
            ></path>
            <path
              id='Path_18'
              fill='#e6e6e6'
              d='M791.632 504.918s-15.708 1.577-11.36 10.288 12.091-7.349 12.091-7.349z'
              data-name='Path 18'
              transform='translate(-531.308 -317.645)'
            ></path>
            <path
              id='Path_19'
              fill='#e6e6e6'
              d='M812.491 414.981a10.647 10.647 0 00-1.755 8.524c1 5.265 4.763 17.048 4.763 17.048l-13.288 12.285 4.011 5.516 18.051-9.276 4.011-2.507a104.012 104.012 0 00-7.367-29.5l-.656-1.59s-4.761-2.004-7.77-.5z'
              data-name='Path 19'
              transform='translate(-546.399 -266.615)'
            ></path>
            <circle
              id='Ellipse_11'
              cx='4.638'
              cy='4.638'
              r='4.638'
              fill='#e6e6e6'
              data-name='Ellipse 11'
              transform='translate(261.164 130.189)'
            ></circle>
          </motion.g>
        </g>
        <path
          id='Path_20'
          fill='#f2f2f2'
          d='M478.744 351.3h-.8v-.8h-.155v.8H477v.155h.8v.8h.155v-.8h.8z'
          data-name='Path 20'
          transform='translate(-292.078 -197.644)'
        ></path>
        <path
          id='Path_21'
          fill='#f2f2f2'
          d='M642.744 295.3h-.795v-.8h-.155v.8H641v.155h.795v.8h.155v-.8h.795z'
          data-name='Path 21'
          transform='translate(-392.498 -166.066)'
        ></path>
        <path
          id='Path_22'
          fill='#f2f2f2'
          d='M624.744 312.3h-.795v-.8h-.155v.8H623v.155h.795v.8h.155v-.8h.795z'
          data-name='Path 22'
          transform='translate(-381.477 -175.652)'
        ></path>
        <g id='stars'>
          <ellipse
            id='Ellipse_6'
            cx='3'
            cy='3.5'
            fill='#f2f2f2'
            data-name='Ellipse 6'
            rx='3'
            ry='3.5'
            transform='translate(57 123)'
          ></ellipse>
          <circle
            id='Ellipse_7'
            cx='3'
            cy='3'
            r='3'
            fill='#f2f2f2'
            data-name='Ellipse 7'
            transform='translate(284 243)'
          ></circle>
          <circle
            id='Ellipse_8'
            cx='3'
            cy='3'
            r='3'
            fill='#f2f2f2'
            data-name='Ellipse 8'
            transform='translate(156 145)'
          ></circle>
          <ellipse
            id='Ellipse_9'
            cx='2'
            cy='1.5'
            fill='#ff6584'
            data-name='Ellipse 9'
            rx='2'
            ry='1.5'
            transform='translate(283 128)'
          ></ellipse>
          <ellipse
            id='Ellipse_10'
            cx='2'
            cy='1.5'
            fill='#ff6584'
            data-name='Ellipse 10'
            rx='2'
            ry='1.5'
            transform='translate(65 215)'
          ></ellipse>
          <circle
            id='Ellipse_12'
            cx='3.385'
            cy='3.385'
            r='3.385'
            fill='#e6e6e6'
            data-name='Ellipse 12'
            transform='translate(259.594 97.095)'
          ></circle>
          <circle
            id='Ellipse_13'
            cx='1.5'
            cy='1.5'
            r='1.5'
            fill='#f2f2f2'
            data-name='Ellipse 13'
            transform='translate(214 115)'
          ></circle>
        </g>
        <g id='spaceship'>
          <motion.g
            drag
            dragConstraints={{ left: 0, right: 300 }}
            dragElastic={0.2}
          >
            {' '}
            <path
              id='Path_23'
              fill='#f2f2f2'
              d='M407.585 204.237c0 121.693-15.3 121.693-34.173 121.693-9.756 0-18.558 0-24.782-16.81a104.985 104.985 0 01-4.7-19.08c-2.984-18.026-4.7-45.114-4.7-85.8a233.845 233.845 0 014.7-45.312 285.796 285.796 0 014.7-19.9 322.834 322.834 0 016.782-21.772c1.57-4.5 3.156-8.718 4.7-12.615a271.136 271.136 0 0113.3-29.133s34.173 61.52 34.173 128.729z'
              data-name='Path 23'
              transform='translate(-262.779 -75.5)'
            ></path>
            <g
              id='Group_6'
              data-name='Group 6'
              opacity='0.1'
              transform='translate(92.695 29.133)'
            >
              <path
                id='Path_24'
                d='M381.02 142.3v212.169h-4.7V154.918a355.24 355.24 0 014.7-12.618z'
                data-name='Path 24'
                transform='translate(-376.325 -142.303)'
              ></path>
            </g>
            <circle
              id='Ellipse_14'
              cx='18.782'
              cy='18.782'
              r='18.782'
              fill='#3f3d56'
              data-name='Ellipse 14'
              transform='translate(90.044 65.216)'
            ></circle>
            <path
              id='Path_25'
              fill='#5a6d8b'
              d='M402.288 605.88c-4.176-10.28-9.538-12.053-13.043-11.9v-1.666h-54.782v1.666c-3.5-.154-8.867 1.619-13.043 11.9-6.782 16.7 4.174 45.39 4.174 45.39s-5.855-40.02 13.588-40.284a23.01 23.01 0 006.1 5.534v10.764h31.4V617.5a22.985 22.985 0 007.844-6.514c19.444.263 13.588 40.284 13.588 40.284s10.957-28.695 4.174-45.39z'
              data-name='Path 25'
              transform='translate(-250.883 -366.928)'
            ></path>
            <path
              id='Path_26'
              fill='#5a6d8b'
              d='M14.608 0A14.608 14.608 0 110 14.608 14.608 14.608 0 0114.608 0z'
              data-name='Path 26'
              transform='translate(93.999 69.39)'
            ></path>
          </motion.g>
        </g>
        <path
          id='Path_27'
          fill='#1469b8'
          d='M981.882 276.46h-.872a35.8 35.8 0 0035.756 35.56v-.872a34.923 34.923 0 01-34.884-34.688z'
          data-name='Path 27'
          transform='translate(-657.583 -188.82)'
        ></path>
        <path
          id='Path_28'
          fill='#1469b8'
          d='M944.882 276.46h-.872a51.947 51.947 0 0051.892 51.7v-.872a51.078 51.078 0 01-51.02-50.824z'
          data-name='Path 28'
          transform='translate(-636.719 -188.82)'
        ></path>
        <path
          id='Path_29'
          fill='#1469b8'
          d='M906.872 276.46H906a68.646 68.646 0 0038.068 61.14 67.788 67.788 0 0030.4 7.126v-.872a67.672 67.672 0 01-67.596-67.394z'
          data-name='Path 29'
          transform='translate(-615.285 -188.82)'
        ></path>
      </g>
    </svg>
  )
}

export default HeroSVG
