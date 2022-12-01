import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerWorkouts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workouts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly WorkoutName?: string | null;
  readonly Reps?: number | null;
  readonly Date?: string | null;
  readonly Length?: number | null;
  readonly Weight?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkouts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workouts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly WorkoutName?: string | null;
  readonly Reps?: number | null;
  readonly Date?: string | null;
  readonly Length?: number | null;
  readonly Weight?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Workouts = LazyLoading extends LazyLoadingDisabled ? EagerWorkouts : LazyWorkouts

export declare const Workouts: (new (init: ModelInit<Workouts>) => Workouts) & {
  copyOf(source: Workouts, mutator: (draft: MutableModel<Workouts>) => MutableModel<Workouts> | void): Workouts;
}