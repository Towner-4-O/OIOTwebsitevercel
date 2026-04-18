import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLine() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="p-2 bg-gray-50 rounded-lg mx-1">
      <Skeleton className="h-[125px] w-[150px] rounded-xl mx-2" />
    </div>
  );
}

export function SkeletonEstimation() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  );
}

export function SkeletonTripDetail() {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-4 w-[40px]" />
      </div>
    </div>
  );
}
