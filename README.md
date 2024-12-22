# Cosmic Daily App

Cosmic Daily App은 Chrome 확장 프로그램으로, NASA Open API를 사용하여 우주와 관련된 이미지와 데이터를 제공합니다. 이 앱은 Chrome의 배경 화면을 자동으로 설정하고, 화성과 서울의 날씨를 비교하는 기능을 제공합니다.


## 📋 Features
	1. 자동 배경화면 설정
      - NASA Open API를 사용하여 최신 우주 이미지를 가져와 Chrome의 배경화면으로 설정합니다.
	2. 화성과 서울의 날씨 비교
	  - NASA의 Mars Rover Photos API와 InSight: Mars Weather Service API를 활용하여 서울과 화성의 날씨를 비교합니다.

## 🛠️ Project Structure
    ```plaintext
            cosmic-insight-app
        ├── public
        │   ├── icons               # 확장 프로그램 아이콘
        │   ├── manifest.json       # 확장 프로그램 메타데이터 및 설정
        │   └── popup.html          # 확장 프로그램 팝업 UI
        ├── src
        │   ├── background.js       # 백그라운드 스크립트 (백엔드 로직)
        │   ├── content.js          # 컨텐츠 스크립트 (웹 페이지와의 상호작용)
        │   └── popup.js            # 팝업 UI의 동작 로직
        └── README.md               # 프로젝트 문서
    ```

## 🚀 Installation
### Chrome Web Store에서 설치 (권장)
1. Chrome Web Store에서 Cosmic Insight App을 검색합니다.
2. 추가(Add to Chrome) 버튼을 클릭합니다.

### 개발자 모드에서 로컬 테스트
1. 이 리포지토리를 클론합니다:
    ```bash
        git clone https://github.com/your-username/cosmic-insight-app.git
    ```
2. Chrome에서 chrome://extensions 페이지로 이동합니다.
3. 개발자 모드를 활성화합니다.
4. 압축 해제된 확장 프로그램 로드 버튼을 클릭하고 cosmic-insight-app 폴더를 선택합니다.

## 📜 Usage
1. 확장 프로그램 실행
  - Chrome에서 Cosmic Insight 아이콘을 클릭합니다.
2. 배경화면 설정
  - NASA에서 제공하는 이미지를 자동으로 가져와 Chrome 배경화면을 설정합니다.
3. 날씨 비교
  - 팝업 창에서 화성과 서울의 날씨 정보를 비교할 수 있습니다.

## 🛠️ Built With
- HTML, CSS, JavaScript: UI 및 로직 구현.
- NASA Open APIs:
  - Mars Weather Service API
  - Mars Rover Photos API
- Chrome Extensions API:
  - Background Scripts
  - Content Scripts
  - Popup Scripts

## 📄 Manifest.json 주요 설정
```json
    {
    "manifest_version": 3,
    "name": "Cosmic Insight App",
    "version": "1.0.0",
    "description": "Explore space with NASA images and compare Mars and Seoul weather.",
    "permissions": ["activeTab", "storage"],
    "background": {
        "service_worker": "src/background.js"
    },
    "action": {
        "default_popup": "public/popup.html",
        "default_icon": "public/icons/icon.png"
    },
    "icons": {
        "48": "public/icons/icon48.png",
        "128": "public/icons/icon128.png"
    }
    }
```
## 🙋‍♂️ Author
- YSBRIAN: [GitHub Profile](https://github.com/YSBRIAN)
- 프로젝트에 대한 문의 사항이 있다면 GitHub에서 이슈를 생성해주세요.