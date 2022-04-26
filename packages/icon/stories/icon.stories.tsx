import { Meta, Story } from "@storybook/react"
import {
  AddIcon,
  CheckmarkIcon,
  CloseIcon,
  CopyIcon,
  DeleteIcon,
  DownIcon,
  EmptyIcon,
  ErrorIcon,
  ExpandIcon,
  EyeOffIcon,
  EyeOnIcon,
  FileDefaultIcon,
  FileExcelIcon,
  FileMusicIcon,
  FilePdfIcon,
  FilePictureIcon,
  FilePPTIcon,
  FileVideoIcon,
  FileWordIcon,
  FileWPSIcon,
  FilterIcon,
  HeartIcon,
  IconProps,
  ImageDefaultIcon,
  InfoCircleIcon,
  LikeIcon,
  LinkIcon,
  LoadingIcon,
  MinusIcon,
  MoreIcon,
  NextDoubleIcon,
  NextIcon,
  CaretDownIcon,
  DragPointIcon,
  PenIcon,
  PersonIcon,
  PlusIcon,
  PreDoubleIcon,
  PreIcon,
  ReduceIcon,
  RightIcon,
  SearchIcon,
  ShareIcon,
  SorterDefaultIcon,
  SorterDownIcon,
  SorterUpIcon,
  StarIcon,
  SuccessIcon,
  TimeIcon,
  UpIcon,
  UploadIcon,
  WarningCircleIcon,
  WarningIcon,
  CalendarIcon,
  CaretLeftIcon,
  CaretRightIcon,
  InfoIcon,
  LeafIcon,
  Result403Icon,
  Result404Icon,
  Result500Icon,
} from "../src"

//👇 This default export determines where your story goes in the story list
export default {
  title: "General/Icon",

  argTypes: {
    spin: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "text",
      },
    },
    _css: {
      control: false,
    },
  },
} as Meta

export const Close: Story<IconProps> = (props) => <CloseIcon {...props} />
export const Copy: Story<IconProps> = (props) => <CopyIcon {...props} />
export const ImageDefault: Story<IconProps> = (props) => (
  <ImageDefaultIcon {...props} />
)
export const Loading: Story<IconProps> = (props) => <LoadingIcon {...props} />
export const Like: Story<IconProps> = (props) => <LikeIcon {...props} />
export const Share: Story<IconProps> = (props) => <ShareIcon {...props} />
export const Star: Story<IconProps> = (props) => <StarIcon {...props} />
export const Heart: Story<IconProps> = (props) => <HeartIcon {...props} />
export const Person: Story<IconProps> = (props) => <PersonIcon {...props} />
export const EyeOn: Story<IconProps> = (props) => <EyeOnIcon {...props} />
export const EyeOff: Story<IconProps> = (props) => <EyeOffIcon {...props} />
export const Search: Story<IconProps> = (props) => <SearchIcon {...props} />
export const Link: Story<IconProps> = (props) => <LinkIcon {...props} />
export const Right: Story<IconProps> = (props) => <RightIcon {...props} />
export const Error: Story<IconProps> = (props) => <ErrorIcon {...props} />
export const Warning: Story<IconProps> = (props) => <WarningIcon {...props} />
export const WarningCircle: Story<IconProps> = (props) => (
  <WarningCircleIcon {...props} />
)
export const Success: Story<IconProps> = (props) => <SuccessIcon {...props} />
export const Reduce: Story<IconProps> = (props) => <ReduceIcon {...props} />
export const Empty: Story<IconProps> = (props) => <EmptyIcon {...props} />
export const Checkmark: Story<IconProps> = (props) => (
  <CheckmarkIcon {...props} />
)
export const Info: Story<IconProps> = (props) => <InfoIcon {...props} />
export const InfoCircle: Story<IconProps> = (props) => (
  <InfoCircleIcon {...props} />
)
export const Pre: Story<IconProps> = (props) => <PreIcon {...props} />
export const Next: Story<IconProps> = (props) => <NextIcon {...props} />
export const Up: Story<IconProps> = (props) => <UpIcon {...props} />
export const Down: Story<IconProps> = (props) => <DownIcon {...props} />
export const CaretDown: Story<IconProps> = (props) => (
  <CaretDownIcon {...props} />
)
export const CaretLeft: Story<IconProps> = (props) => (
  <CaretLeftIcon {...props} />
)
export const CaretRight: Story<IconProps> = (props) => (
  <CaretRightIcon {...props} />
)
export const Expand: Story<IconProps> = (props) => <ExpandIcon {...props} />
export const More: Story<IconProps> = (props) => <MoreIcon {...props} />
export const Add: Story<IconProps> = (props) => <AddIcon {...props} />
export const Minus: Story<IconProps> = (props) => <MinusIcon {...props} />
export const Plus: Story<IconProps> = (props) => <PlusIcon {...props} />
export const Upload: Story<IconProps> = (props) => <UploadIcon {...props} />
export const Delete: Story<IconProps> = (props) => <DeleteIcon {...props} />
export const FileWord: Story<IconProps> = (props) => <FileWordIcon {...props} />
export const FileDefault: Story<IconProps> = (props) => (
  <FileDefaultIcon {...props} />
)
export const FileVideo: Story<IconProps> = (props) => (
  <FileVideoIcon {...props} />
)
export const FileExcel: Story<IconProps> = (props) => (
  <FileExcelIcon {...props} />
)
export const FileMusic: Story<IconProps> = (props) => (
  <FileMusicIcon {...props} />
)
export const FilePdf: Story<IconProps> = (props) => <FilePdfIcon {...props} />
export const FilePicture: Story<IconProps> = (props) => (
  <FilePictureIcon {...props} />
)
export const FileWPS: Story<IconProps> = (props) => <FileWPSIcon {...props} />
export const FilePPT: Story<IconProps> = (props) => <FilePPTIcon {...props} />
export const Pen: Story<IconProps> = (props) => <PenIcon {...props} />
export const PreDouble: Story<IconProps> = (props) => (
  <PreDoubleIcon {...props} />
)
export const NextDouble: Story<IconProps> = (props) => (
  <NextDoubleIcon {...props} />
)
export const SorterDefault: Story<IconProps> = (props) => (
  <SorterDefaultIcon {...props} />
)
export const SorterUp: Story<IconProps> = (props) => <SorterUpIcon {...props} />
export const SorterDown: Story<IconProps> = (props) => (
  <SorterDownIcon {...props} />
)

export const Filter: Story<IconProps> = (props) => <FilterIcon {...props} />
export const Time: Story<IconProps> = (props) => <TimeIcon {...props} />
export const Calendar: Story<IconProps> = (props) => <CalendarIcon {...props} />

export const DragPoint: Story<IconProps> = (props) => (
  <DragPointIcon {...props} />
)

export const Leaf: Story<IconProps> = (props) => <LeafIcon {...props} />
export const Result403: Story<IconProps> = (props) => (
  <Result403Icon {...props} />
)
export const Result404: Story<IconProps> = (props) => (
  <Result404Icon {...props} />
)
export const Result500: Story<IconProps> = (props) => (
  <Result500Icon {...props} />
)
