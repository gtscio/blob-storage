// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IRestRouteEntryPoint } from "@twin.org/api-models";
import { generateRestRoutesBlobStorage, tagsBlobStorage } from "./blobStorageRoutes";

export const restEntryPoints: IRestRouteEntryPoint[] = [
	{
		name: "blobStorage",
		defaultBaseRoute: "blob",
		tags: tagsBlobStorage,
		generateRoutes: generateRestRoutesBlobStorage
	}
];
