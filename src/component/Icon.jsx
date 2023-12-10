const Icon = ({ condition }) => {
  switch (condition) {
    case "cloud":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="237"
          height="196"
          viewBox="0 0 237 196"
          fill="none"
        >
          <circle cx="94" cy="49.002" r="25" fill="url(#paint0_radial_3_794)" />
          <g opacity="0.67" filter="url(#filter0_f_3_794)">
            <path
              d="M146.965 52.365C163.708 67.4756 202.999 83.4986 187.889 100.242C172.778 116.985 86.4095 164.813 50.4482 146.326C33.705 131.216 65.4487 82.5615 80.5593 65.8184C95.6699 49.0752 130.221 37.2544 146.965 52.365Z"
              fill="url(#paint1_linear_3_794)"
              fillOpacity="0.3"
            />
          </g>
          <g filter="url(#filter1_ii_3_794)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M103.196 117.619H88.1789C71.8153 117.619 58.5501 104.354 58.5501 87.9901C58.5501 71.6265 71.8153 58.3613 88.1789 58.3613H89.8024C95.5461 58.3613 100.928 59.9107 105.553 62.6144C111.565 44.8036 128.409 31.9797 148.248 31.9797H150.481C174.129 31.9797 193.3 51.1508 193.3 74.7995C193.3 98.4481 174.129 117.619 150.481 117.619H103.196V117.619Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3_794"
              x="0.699677"
              y="0.410339"
              width="235.581"
              height="195.096"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="22.5"
                result="effect1_foregroundBlur_3_794"
              />
            </filter>
            <filter
              id="filter1_ii_3_794"
              x="40.5501"
              y="16.9797"
              width="160.75"
              height="111.639"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="8" dy="-15" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3_794"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-18" dy="11" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_3_794"
                result="effect2_innerShadow_3_794"
              />
            </filter>
            <radialGradient
              id="paint0_radial_3_794"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(103.947 35.3747) rotate(132.136) scale(52.0899 52.0899)"
            >
              <stop stopColor="#FFF72C" />
              <stop offset="1" stopColor="#DF7800" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_3_794"
              x1="68.2296"
              y1="153.73"
              x2="165.484"
              y2="44.5849"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#254659" />
              <stop offset="1" stopColor="#023553" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "location":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clipPath="url(#clip0_3_828)">
            <g filter="url(#filter0_dii_3_828)">
              <path
                d="M12 24.228L5.636 17.864C4.37734 16.6053 3.52019 15.0017 3.17293 13.2559C2.82567 11.51 3.00391 9.70044 3.6851 8.05591C4.36629 6.41139 5.51984 5.00579 6.99988 4.01686C8.47992 3.02793 10.22 2.50009 12 2.50009C13.78 2.50009 15.5201 3.02793 17.0001 4.01686C18.4802 5.00579 19.6337 6.41139 20.3149 8.05591C20.9961 9.70044 21.1743 11.51 20.8271 13.2559C20.4798 15.0017 19.6227 16.6053 18.364 17.864L12 24.228ZM16.95 16.45C17.9289 15.471 18.5955 14.2237 18.8656 12.8659C19.1356 11.508 18.9969 10.1006 18.4671 8.82157C17.9373 7.54253 17.04 6.44932 15.8889 5.68018C14.7378 4.91104 13.3844 4.50052 12 4.50052C10.6156 4.50052 9.26222 4.91104 8.11109 5.68018C6.95996 6.44932 6.06275 7.54253 5.53292 8.82157C5.00308 10.1006 4.86442 11.508 5.13445 12.8659C5.40449 14.2237 6.07111 15.471 7.05 16.45L12 21.4L16.95 16.45ZM12 13.5C11.4696 13.5 10.9609 13.2893 10.5858 12.9142C10.2107 12.5392 10 12.0304 10 11.5C10 10.9696 10.2107 10.4609 10.5858 10.0858C10.9609 9.71073 11.4696 9.50001 12 9.50001C12.5304 9.50001 13.0391 9.71073 13.4142 10.0858C13.7893 10.4609 14 10.9696 14 11.5C14 12.0304 13.7893 12.5392 13.4142 12.9142C13.0391 13.2893 12.5304 13.5 12 13.5Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_dii_3_828"
              x="-55"
              y="-43.4999"
              width="126"
              height="129.728"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="4"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_3_828"
              />
              <feOffset dx="-4" dy="8" />
              <feGaussianBlur stdDeviation="25" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3_828"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3_828"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-6" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_3_828"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="-3" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_3_828"
                result="effect3_innerShadow_3_828"
              />
            </filter>
            <clipPath id="clip0_3_828">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      );

    case "sunny":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <g filter="url(#filter0_f_3_535)">
            <circle
              cx="30.5"
              cy="30.5"
              r="15.5"
              fill="url(#paint0_radial_3_535)"
            />
          </g>
          <circle
            cx="30.5"
            cy="30.5"
            r="10"
            fill="url(#paint1_radial_3_535)"
            stroke="#F1B04E"
          />
          <defs>
            <filter
              id="filter0_f_3_535"
              x="5"
              y="5"
              width="51"
              height="51"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="5"
                result="effect1_foregroundBlur_3_535"
              />
            </filter>
            <radialGradient
              id="paint0_radial_3_535"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(36.6672 22.0511) rotate(132.136) scale(32.2957 32.2958)"
            >
              <stop stopColor="#FFF72C" />
              <stop offset="1" stopColor="#DF7800" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_3_535"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(34.6778 24.7766) rotate(132.136) scale(21.8778 21.8778)"
            >
              <stop stopColor="#FFF72C" />
              <stop offset="1" stopColor="#DF7800" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "thunder":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="118"
          viewBox="0 0 128 118"
          fill="none"
        >
          <g opacity="0.67" filter="url(#filter0_f_3_491)">
            <path
              d="M71.4554 47.4353C75.706 51.2715 85.681 55.3392 81.8449 59.5898C78.0088 63.8404 56.0823 75.9826 46.9528 71.2893C42.7022 67.4531 50.761 55.1013 54.5971 50.8507C58.4333 46.6001 67.2048 43.5992 71.4554 47.4353Z"
              fill="url(#paint0_linear_3_491)"
              fillOpacity="0.3"
            />
          </g>
          <g filter="url(#filter1_ii_3_491)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.8776 64.0016V64.002H56.5315C52.3772 64.002 49.0096 60.6343 49.0096 56.4801C49.0096 52.3259 52.3772 48.9582 56.5315 48.9582H56.9436C58.4017 48.9582 59.7679 49.3516 60.9419 50.0379C62.4681 45.5161 66.7445 42.2603 71.7812 42.2603H72.348C78.3516 42.2603 83.2186 47.1273 83.2186 53.131C83.2186 59.1347 78.3516 64.0016 72.3479 64.0016H64.8776Z"
              fill="white"
            />
          </g>
          <path
            d="M71 57.522L77.6154 50.7266L76.0769 55.897L79 56.7834L72.0769 63.7266L73.7692 58.5561L71 57.522Z"
            fill="url(#paint1_radial_3_491)"
          />
          <path
            d="M62 65.522L68.6154 58.7266L67.0769 63.897L70 64.7834L63.0769 71.7266L64.7692 66.5561L62 65.522Z"
            fill="url(#paint2_radial_3_491)"
          />
          <path
            d="M53 59.522L59.6154 52.7266L58.0769 57.897L61 58.7834L54.0769 65.7266L55.7692 60.5561L53 59.522Z"
            fill="url(#paint3_radial_3_491)"
          />
          <path
            d="M73.9824 66.4048L74.2832 67.8016C74.4494 68.5731 73.9752 69.3945 73.224 69.6363C72.4728 69.8781 71.7292 69.4487 71.563 68.6773C71.3969 67.9059 71.8711 67.0845 72.6223 66.8427L73.9824 66.4048Z"
            fill="url(#paint4_radial_3_491)"
          />
          <path
            d="M58.9824 66.4048L59.2832 67.8016C59.4494 68.5731 58.9752 69.3945 58.224 69.6363C57.4728 69.8781 56.7292 69.4487 56.563 68.6773C56.3969 67.9059 56.8711 67.0845 57.6223 66.8427L58.9824 66.4048Z"
            fill="url(#paint5_radial_3_491)"
          />
          <path
            d="M50.9824 66.4048L51.2832 67.8016C51.4494 68.5731 50.9752 69.3945 50.224 69.6363C49.4728 69.8781 48.7292 69.4487 48.563 68.6773C48.3969 67.9059 48.8711 67.0845 49.6223 66.8427L50.9824 66.4048Z"
            fill="url(#paint6_radial_3_491)"
          />
          <path
            d="M54.9824 71.4048L55.2832 72.8016C55.4494 73.5731 54.9752 74.3945 54.224 74.6363C53.4728 74.8781 52.7292 74.4487 52.563 73.6773C52.3969 72.9059 52.8711 72.0845 53.6223 71.8427L54.9824 71.4048Z"
            fill="url(#paint7_radial_3_491)"
          />
          <path
            d="M61.9824 71.4048L62.2832 72.8016C62.4494 73.5731 61.9752 74.3945 61.224 74.6363C60.4728 74.8781 59.7292 74.4487 59.563 73.6773C59.3969 72.9059 59.8711 72.0845 60.6223 71.8427L61.9824 71.4048Z"
            fill="url(#paint8_radial_3_491)"
          />
          <path
            d="M68.9824 71.4048L69.2832 72.8016C69.4494 73.5731 68.9752 74.3945 68.224 74.6363C67.4728 74.8781 66.7292 74.4487 66.563 73.6773C66.3969 72.9059 66.8711 72.0845 67.6223 71.8427L68.9824 71.4048Z"
            fill="url(#paint9_radial_3_491)"
          />
          <defs>
            <filter
              id="filter0_f_3_491"
              x="0.747284"
              y="0.669739"
              width="126.959"
              height="116.681"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="22.5"
                result="effect1_foregroundBlur_3_491"
              />
            </filter>
            <filter
              id="filter1_ii_3_491"
              x="31.0096"
              y="27.2603"
              width="60.209"
              height="47.7417"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="8" dy="-15" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3_491"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-18" dy="11" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_3_491"
                result="effect2_innerShadow_3_491"
              />
            </filter>
            <linearGradient
              id="paint0_linear_3_491"
              x1="51.467"
              y1="73.1688"
              x2="76.1569"
              y2="45.4602"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#254659" />
              <stop offset="1" stopColor="#023553" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_3_491"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.5915 53.6835) rotate(119.107) scale(11.4947 9.81979)"
            >
              <stop stopColor="#FFF72C" />
              <stop offset="1" stopColor="#DF7800" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_3_491"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(67.5915 61.6835) rotate(119.107) scale(11.4947 9.81979)"
            >
              <stop stopColor="#FFF72C" />
              <stop offset="1" stopColor="#DF7800" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_3_491"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(58.5915 55.6835) rotate(119.107) scale(11.4947 9.81979)"
            >
              <stop stopColor="#FFF72C" />
              <stop offset="1" stopColor="#DF7800" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_3_491"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(71.4695 69.1299) rotate(-34.1445) scale(3.73169 2.74928)"
            >
              <stop stopColor="#008CB9" />
              <stop offset="1" stopColor="#5CC4E5" />
            </radialGradient>
            <radialGradient
              id="paint5_radial_3_491"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(56.4695 69.1299) rotate(-34.1445) scale(3.73169 2.74928)"
            >
              <stop stopColor="#008CB9" />
              <stop offset="1" stopColor="#5CC4E5" />
            </radialGradient>
            <radialGradient
              id="paint6_radial_3_491"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(48.4695 69.1299) rotate(-34.1445) scale(3.73169 2.74928)"
            >
              <stop stopColor="#008CB9" />
              <stop offset="1" stopColor="#5CC4E5" />
            </radialGradient>
            <radialGradient
              id="paint7_radial_3_491"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(52.4695 74.1299) rotate(-34.1445) scale(3.73169 2.74928)"
            >
              <stop stopColor="#008CB9" />
              <stop offset="1" stopColor="#5CC4E5" />
            </radialGradient>
            <radialGradient
              id="paint8_radial_3_491"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(59.4695 74.1299) rotate(-34.1445) scale(3.73169 2.74928)"
            >
              <stop stopColor="#008CB9" />
              <stop offset="1" stopColor="#5CC4E5" />
            </radialGradient>
            <radialGradient
              id="paint9_radial_3_491"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(66.4695 74.1299) rotate(-34.1445) scale(3.73169 2.74928)"
            >
              <stop stopColor="#008CB9" />
              <stop offset="1" stopColor="#5CC4E5" />
            </radialGradient>
          </defs>
        </svg>
      );

    case "mainCloud":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="237"
          height="196"
          viewBox="0 0 237 196"
          fill="none"
        >
          <circle cx="94" cy="49.002" r="25" fill="url(#paint0_radial_3_794)" />
          <g opacity="0.67" filter="url(#filter0_f_3_794)">
            <path
              d="M146.965 52.365C163.708 67.4756 202.999 83.4986 187.889 100.242C172.778 116.985 86.4095 164.813 50.4482 146.326C33.705 131.216 65.4487 82.5615 80.5593 65.8184C95.6699 49.0752 130.221 37.2544 146.965 52.365Z"
              fill="url(#paint1_linear_3_794)"
              fill-opacity="0.3"
            />
          </g>
          <g filter="url(#filter1_ii_3_794)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M103.196 117.619H88.1789C71.8153 117.619 58.5501 104.354 58.5501 87.9901C58.5501 71.6265 71.8153 58.3613 88.1789 58.3613H89.8024C95.5461 58.3613 100.928 59.9107 105.553 62.6144C111.565 44.8036 128.409 31.9797 148.248 31.9797H150.481C174.129 31.9797 193.3 51.1508 193.3 74.7995C193.3 98.4481 174.129 117.619 150.481 117.619H103.196V117.619Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3_794"
              x="0.699677"
              y="0.410339"
              width="235.581"
              height="195.096"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="22.5"
                result="effect1_foregroundBlur_3_794"
              />
            </filter>
            <filter
              id="filter1_ii_3_794"
              x="40.5501"
              y="16.9797"
              width="160.75"
              height="111.639"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="8" dy="-15" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3_794"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-18" dy="11" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_3_794"
                result="effect2_innerShadow_3_794"
              />
            </filter>
            <radialGradient
              id="paint0_radial_3_794"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(103.947 35.3747) rotate(132.136) scale(52.0899 52.0899)"
            >
              <stop stop-color="#FFF72C" />
              <stop offset="1" stop-color="#DF7800" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_3_794"
              x1="68.2296"
              y1="153.73"
              x2="165.484"
              y2="44.5849"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#254659" />
              <stop offset="1" stop-color="#023553" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "power":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M18.364 5.86374C19.6226 7.14472 20.4798 8.77679 20.8271 10.5536C21.1743 12.3303 20.9961 14.172 20.3149 15.8457C19.6337 17.5194 18.4802 18.9499 17.0001 19.9563C15.5201 20.9628 13.78 21.5 12 21.5C10.22 21.5 8.47992 20.9628 6.99988 19.9563C5.51984 18.9499 4.36628 17.5194 3.68509 15.8457C3.0039 14.172 2.82567 12.3303 3.17293 10.5536C3.5202 8.7768 4.37736 7.14473 5.63603 5.86375"
            stroke="#FF6D6D"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M12 3.5V8.22749"
            stroke="#FF6D6D"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      );
  }
};

export default Icon;
