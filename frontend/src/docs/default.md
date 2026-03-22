//TODO :: Post 기능 구현 방법 고민 및 명세 추가 작성

# 기능: Post 파일명 반환

## 목적

Post 조회 시 파일명만 내려준다

## 데이터

- file: FileField

## 처리 로직

- file.name → 경로 포함
- basename으로 파일명만 추출

## 응답

{
filename: string | null
}

## 예외

- 파일 없으면 null

모르는 것 :

- 프론트엔드에서 처리해도되는지? ex\* path.split('/').at(-1)
    - 프론트에서 할 수 있지만, 백엔드 저장 경로 구조를 알아야하는 결합도 문제가 생길 수 있음
    - 저장 경로가 바뀌면 프론트도 같이 수정해야함
- 어떻게 변환하고 바꿀 수 있는지?
- Django는 Serializer로 데이터가 중간 처리되는데, 여기서 포함해야하는건지

    - 여기서 포함된다.

- 파일명을 가공해서 내려주는 방식

    - @property, ReadOnlyField
        - 장점 : 모델에 로직이 있어서 Serializer 외부에서도 사용 가능
        - 단점 : 모델에 표현 로직 섞임
    - SerializerMethodField (Serializer에서 가공)
        - 장점 : 모델을 건드리지 않고 Serializer에서만 처리
        - 단점 : Serializer 밖에서는 파일명을 직접 꺼내야함

- filename이라는 Field를 따로 만들어야되는건지
    - 데이터 중복으로 추천하지 않는다

# 첨부파일 직접 다운로드하기

# 전체 구조

- Model: DB 구조 정의
- Serializer: Model → JSON 변환 (여기서 filename 추가)
- View: 요청 처리 + Serializer 실행
- Next.js: JSON 받아서 화면에 출력

## 첨부파일 저장하기

1. 유저가 게시물 상세 정보를 확인한다.
    - 첨부파일명은 경로가 아닌 파일의 이름만 제공한다.
2. 첨부파일 다운로드 버튼을 누른다
3. 해당 파일을 저장한다.

## 첨부파일명만 API에 포함하기

### 개발자

- Model, Serializer에 filename 선언

```
@property
    def filename(self):
        return os.path.basename(self.files.name)
```

- serializer에 filename 필드 선언

```
filename = serializers.ReadOnlyField()
```

## 내부 흐름 DRF

- serializer 실행
- filename 필드 발견
- model에서 Post에 filename 확인
- 있음 > Property 실행
- 값을 응답에 포함
